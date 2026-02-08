const { sequelize, Deck, Card } = require('../db/mysql/models');

const { generateCards, shuffleCards } = require('../domain/cards');

const { identifier } = require('../utils');

exports.findAll = async () => {
  return Deck.findAll();
};

exports.findByUid = async (uid, { cards = false } = {}) => {
  return Deck.findOne({
    where: { uid },
    include: cards
      ? [
          {
            model: Card,
            as: 'cards',
            order: [['position', 'ASC']],
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ]
      : [],
  });
};

exports.create = async (payload = {}) => {
  const { deckCount = 1, jokerEnabled = false, shuffled = false } = payload;

  let cards = generateCards({ deckCount, jokerEnabled });

  if (shuffled) {
    cards = shuffleCards(cards);
  }

  return sequelize.transaction(async (t) => {
    // 1. Create deck
    const deck = await Deck.create(
      {
        uid: identifier.uid(12),
        deckCount,
        jokerEnabled,
        shuffled,
        remaining: cards.length,
      },
      { transaction: t },
    );

    const cardsToCreate = cards.map((card, index) => ({
      deckId: deck.id,
      position: index,
      ...card,
    }));

    // 2. Create cards
    await Card.bulkCreate(cardsToCreate, { transaction: t });

    return deck;
  });
};

exports.shuffle = async (uid) => {
  return sequelize.transaction(async (t) => {
    // 1. Find deck
    const deck = await Deck.findOne({ where: { uid } }, { transaction: t });

    if (!deck) {
      throw new Error('Deck not found');
    }

    // 2. Get cards for this deck
    const cards = await Card.findAll({
      where: { deckId: deck.id },
      order: [['position', 'ASC']],
      transaction: t,
    });

    // 3. Shuffle in memory
    const shuffled = shuffleCards(cards);

    // 4. Persist new positions
    await Promise.all(
      shuffled.map((card, index) =>
        card.update({ position: index }, { transaction: t }),
      ),
    );

    // 5. Mark deck as shuffled
    await deck.update({ shuffled: true }, { transaction: t });

    return deck;
  });
};

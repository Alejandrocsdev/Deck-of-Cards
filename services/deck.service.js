const { Deck, Card } = require('../db/mysql/models');

const { generateCards, shuffleCards } = require('../domain/cards');

const { identifier } = require('../utils');

exports.findAll = async () => {
  return Deck.findAll();
};

exports.create = async (payload = {}) => {
  const { deckCount = 1, jokerEnabled = false, shuffled = false } = payload;

  let cards = generateCards({ deckCount, jokerEnabled });

  if (shuffled) {
    cards = shuffleCards(cards);
  }

  const deck = await Deck.create({
    uid: identifier.uid(12),
    deckCount,
    jokerEnabled,
    shuffled,
    remaining: cards.length,
  });

  const cardsToCreate = cards.map((card, index) => ({
    deckId: deck.id,
    position: index,
    ...card,
  }));

  await Card.bulkCreate(cardsToCreate);

  return deck;
};

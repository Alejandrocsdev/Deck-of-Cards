const decksService = require('../services/deck.service');

const { asyncHandler } = require('../middlewares');

const { exclude } = require('../config/db/mysql/helpers');

exports.createDeck = asyncHandler(async (req, res) => {
  const deck = await decksService.create(req.body);
  const deckDto = exclude(deck, ['deckCount', 'jokerEnabled']).public().json();
  res.status(201).json(deckDto);
});

exports.shuffleDeck = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const deck = await decksService.shuffle(uid);
  const deckDto = exclude(deck).public().json();
  res.json(deckDto);
});

exports.drawCards = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const { count, from } = req.query;

  const result = await decksService.draw(uid, { count: Number(count), from });

  const drawnDto = result.drawn.map((card) => {
    return exclude(card, ['deckId', 'pileId']).public().json();
  });

  res.json({
    uid: result.uid,
    cards: drawnDto,
    remaining: result.remaining,
  });
});

exports.addToPile = asyncHandler(async (req, res) => {
  const { uid, pileName } = req.params;
  const { cards } = req.body;

  if (!Array.isArray(cards) || cards.length === 0) {
    throw new CustomError(400, 'Cards must be a non-empty array');
  }

  const result = await decksService.addToPile(uid, pileName, cards);

  res.json({
    uid: result.uid,
    remaining: result.remaining,
    piles: {
      [pileName]: {
        remaining: result.pileCount,
      },
    },
  });
});

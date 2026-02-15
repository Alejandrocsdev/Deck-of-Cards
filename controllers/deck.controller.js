const decksService = require('../services/deck.service');

const { asyncHandler } = require('../middlewares');

exports.createDeck = asyncHandler(async (req, res) => {
  const deck = await decksService.create(req.body);
  res.status(201).json(deck);
});

exports.shuffleDeck = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const deck = await decksService.shuffle(uid);
  res.json(deck);
});

exports.drawCards = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const { count, from } = req.query;

  const result = await decksService.draw(uid, { count: Number(count), from });

  res.json({
    uid: result.uid,
    cards: result.cards,
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

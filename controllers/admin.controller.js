const decksService = require('../services/deck.service');

const { asyncHandler } = require('../middlewares');

const CustomError = require('../errors/CustomError');

exports.getDecks = asyncHandler(async (req, res) => {
  const decks = await decksService.findAll();
  res.json(decks);
});

exports.getDeck = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const cards = req.query.cards === 'true';

  const deck = await decksService.findByUid(uid, { cards });

  if (!deck) {
    throw new CustomError(404, 'Deck not found');
  }

  const deckDto = deck.toJSON();
  res.json(deckDto);
});

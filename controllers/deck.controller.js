const decksService = require('../services/deck.service');

const { asyncHandler } = require('../middlewares');

const { exclude } = require('../config/db/mysql/helpers');

exports.createDeck = asyncHandler(async (req, res) => {
  const deck = await decksService.create(req.body);
  const deckDto = exclude(deck).public().json();
  res.status(201).json(deckDto);
});

exports.shuffleDeck = asyncHandler(async (req, res) => {
	const { uid } = req.params;
  const deck = await decksService.shuffle(uid);
  const deckDto = exclude(deck).public().json();
  res.json(deckDto);
});

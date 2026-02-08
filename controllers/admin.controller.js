const decksService = require('../services/deck.service');

const { asyncHandler } = require('../middlewares');

exports.getDecks = asyncHandler(async (req, res) => {
  const decks = await decksService.findAll();
  res.json(decks);
});

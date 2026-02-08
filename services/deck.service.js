const { Deck } = require('../db/mysql/models');

const { identifier } = require('../utils');

exports.findAll = async () => {
  return Deck.findAll();
};

exports.create = async (payload) => {
  const { deckCount = 1, jokerEnabled = false, shuffled = false } = payload;

  return Deck.create({
    uid: identifier.uid(12),
    deckCount,
    jokerEnabled,
    shuffled,
    remaining: jokerEnabled ? 54 * deckCount : 52 * deckCount,
  });
};

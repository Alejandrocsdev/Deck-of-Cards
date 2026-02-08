const { url } = require('../../utils');

const { CARD_SUITS, CARD_VALUES, JOKERS } = require('./constants');

const generateCards = ({ deckCount, jokerEnabled }) => {
  const cards = [];

  for (let i = 0; i < deckCount; i++) {
    for (const suit in CARD_SUITS) {
      for (const { value, code } of CARD_VALUES) {
        const cardCode = `${code}${CARD_SUITS[suit]}`;
        cards.push({
          code: cardCode,
          value,
          suit,
          image: `${url.serverUrl}/img/${cardCode}.png`,
        });
      }
    }

    if (jokerEnabled) {
      JOKERS.forEach((joker) => {
        cards.push({ ...joker });
      });
    }
  }

  return cards;
};

module.exports = generateCards;

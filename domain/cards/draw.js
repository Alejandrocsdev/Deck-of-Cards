const shuffleCards = require('./shuffle');

const drawCards = (cards, { count, from }) => {
  if (!Array.isArray(cards)) {
    throw new TypeError('drawCards expects an array');
  }

  if (count <= 0) {
    return { drawn: [], remaining: cards };
  }

  let drawn;

  switch (from) {
    case 'top':
      drawn = cards.slice(0, count);
      break;

    case 'bottom':
      drawn = cards.slice(-count);
      break;

    case 'random': {
      const shuffled = shuffleCards(cards);
      drawn = shuffled.slice(0, count);
      break;
    }

    default:
      throw new CustomError(400, `Invalid draw mode: ${from}`);
  }

  const drawnIds = new Set(drawn.map((card) => card.id));

  const remaining = cards.filter((card) => !drawnIds.has(card.id));

  return { drawn, remaining };
};

module.exports = drawCards;

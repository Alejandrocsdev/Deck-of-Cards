const shuffleCards = (cards = []) => {
  if (!Array.isArray(cards)) {
    throw new TypeError('shuffleCards expects an array');
  }

  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

module.exports = shuffleCards;

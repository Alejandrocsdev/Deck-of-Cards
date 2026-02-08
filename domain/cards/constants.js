const { url } = require('../../utils');

exports.CARD_SUITS = {
  clubs: 'C',
  diamonds: 'D',
  hearts: 'H',
  spades: 'S',
};

exports.CARD_VALUES = [
  { value: 'ACE', code: 'A' },
  { value: '2', code: '2' },
  { value: '3', code: '3' },
  { value: '4', code: '4' },
  { value: '5', code: '5' },
  { value: '6', code: '6' },
  { value: '7', code: '7' },
  { value: '8', code: '8' },
  { value: '9', code: '9' },
  { value: '10', code: '0' },
  { value: 'JACK', code: 'J' },
  { value: 'QUEEN', code: 'Q' },
  { value: 'KING', code: 'K' },
];

exports.JOKERS = [
  {
    code: 'X1',
    value: 'JOKER',
    suit: 'BLACK',
    image: `${url.serverUrl}/img/X1.png`,
  },
  {
    code: 'X2',
    value: 'JOKER',
    suit: 'RED',
    image: `${url.serverUrl}/img/X2.png`,
  },
];

'use strict';

const decks = [
  { uid: '3X64JTJAKD8P', deck_count: 3, joker_enabled: true, shuffled: false, remaining: 162 },
  { uid: 'WCJEAYFS8SDY', deck_count: 2, joker_enabled: false, shuffled: true, remaining: 70 },
	{ uid: '2KBJ3M7AKY3Y', deck_count: 1, joker_enabled: false, shuffled: true, remaining: 10 },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('decks', decks);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('decks', null, {});
  },
};

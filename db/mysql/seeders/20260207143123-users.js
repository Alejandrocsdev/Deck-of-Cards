'use strict';

const users = [{ name: 'Alex' }, { name: 'Ben' }, { name: 'Chloe' }];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

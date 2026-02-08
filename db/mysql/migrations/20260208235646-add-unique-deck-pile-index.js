module.exports = {
  async up(queryInterface) {
    await queryInterface.addIndex('piles', ['deck_id', 'name'], {
      unique: true,
      name: 'unique_deck_pile',
    });
  },
  async down(queryInterface) {
    await queryInterface.removeIndex('piles', 'unique_deck_pile');
  },
};

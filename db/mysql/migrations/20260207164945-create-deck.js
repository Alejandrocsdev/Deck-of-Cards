module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      deck_count: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      joker_enabled: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      shuffled: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      remaining: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('decks');
  },
};

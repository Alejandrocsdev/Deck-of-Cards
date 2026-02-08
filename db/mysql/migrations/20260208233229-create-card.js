module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cards',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        deck_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'decks', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        pile_id: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: { model: 'piles', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        code: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        value: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        suit: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        image: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        drawn: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        position: {
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
      },
      {
        indexes: [
          { fields: ['deck_id'] },
          { fields: ['pile_id'] },
          { fields: ['deck_id', 'drawn'] },
        ],
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('cards');
  },
};

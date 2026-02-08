module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'piles',
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
        name: {
          allowNull: false,
          type: Sequelize.STRING,
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
      // {
      //   uniqueKeys: {
      //     unique_deck_pile: {
      //       fields: ['deck_id', 'name'],
      //     },
      //   },
      // },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('piles');
  },
};

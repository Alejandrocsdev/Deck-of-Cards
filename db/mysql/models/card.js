const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Deck, {
        foreignKey: 'deckId',
        as: 'deck',
      });
      Card.belongsTo(models.Pile, {
        foreignKey: 'pileId',
        as: 'pile',
      });
    }
  }
  Card.init(
    {
      deckId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pileId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      suit: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      drawn: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      position: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards',
      underscored: true,
    },
  );
  return Card;
};

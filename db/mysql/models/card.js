'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Deck, {
        foreignKey: 'deckId',
        as: 'deck',
      });
    }
  }
  Card.init(
    {
      deckId: {
        allowNull: false,
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

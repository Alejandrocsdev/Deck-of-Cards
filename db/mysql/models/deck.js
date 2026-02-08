const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      Deck.hasMany(models.Card, {
        foreignKey: 'deckId',
        as: 'cards',
      });
      Deck.hasMany(models.Pile, {
        foreignKey: 'deckId',
        as: 'piles',
      });
    }
  }
  Deck.init(
    {
      uid: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      deckCount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shuffled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      jokerEnabled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      remaining: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Deck',
      tableName: 'decks',
      underscored: true,
    },
  );
  return Deck;
};

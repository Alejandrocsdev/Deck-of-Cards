const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pile extends Model {
    static associate(models) {
      Pile.belongsTo(models.Deck, {
        foreignKey: 'deckId',
        as: 'deck',
      });
      Pile.hasMany(models.Card, {
        foreignKey: 'pileId',
        as: 'cards',
      });
    }
  }
  Pile.init(
    {
      deckId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Pile',
      tableName: 'piles',
      underscored: true,
    },
  );
  return Pile;
};

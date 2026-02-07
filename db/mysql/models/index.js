const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const sequelize = require('../../../config/db/mysql/sequelize');
const Sequelize = require('sequelize')
const db = {};

// Read all model files in the current directory
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

// Run association method for each model, if defined
Object.values(db).forEach((model) => {
  if (model.associate) model.associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

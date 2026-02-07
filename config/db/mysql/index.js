const sequelize = require('./sequelize');

const connectMysql = () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.info('[MySQL] connected');
    })
    .catch((error) => {
      console.error(`[MySQL] connection failed`);
      throw error;
    });
};

module.exports = connectMysql;

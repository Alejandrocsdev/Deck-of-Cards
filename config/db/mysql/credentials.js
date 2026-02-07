require('dotenv').config({ quiet: true });

module.exports = {
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  dialect: 'mysql',
};

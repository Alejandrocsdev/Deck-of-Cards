const { User } = require('../db/mysql/models');

exports.findAll = async () => {
  return User.findAll();
};

exports.create = async (payload) => {
  return User.create(payload);
};

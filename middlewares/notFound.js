const CustomError = require('../errors/CustomError');

const notFound = (req, res, next) => {
  const error = new CustomError(404, `Cannot ${req.method} ${req.path}`);
  next(error);
};

module.exports = notFound;

const httpStatus = {
  isClientError(code) {
    return Number.isInteger(code) && code >= 400 && code < 500;
  },
  isServerError(code) {
    return Number.isInteger(code) && code >= 500 && code < 600;
  },
  isHttpError(code) {
    return Number.isInteger(code) && code >= 400 && code < 600;
  },
};

module.exports = httpStatus;

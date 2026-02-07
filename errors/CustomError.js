const { httpStatus } = require('../utils');

class CustomError extends Error {
  constructor(code, message) {
    if (!httpStatus.isClientError(code)) {
      const error = new Error('CustomError status code must be 4xx');
      error.isOperational = false;
      throw error;
    }

    if (typeof message !== 'string' || !message.trim()) {
      const error = new Error('CustomError requires a valid message');
      error.isOperational = false;
      throw error;
    }

    // Response: Production & Development => Operational Errors
    super(message);
    this.code = code;
    this.isOperational = true;

		// Freeze the error instance to prevent accidental mutation
		Object.freeze(this);
  }
}

module.exports = CustomError;

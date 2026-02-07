const { httpStatus } = require('../utils');

const errorHandler = (error, req, res, next) => {
  const isProd = process.env.NODE_ENV === 'production';
	
	// Console: Skip Operational Errors in Production
  if (!isProd || !error.isOperational) {
    console.error(error);
  }

  // Response: Production => Programming Errors
  if (isProd && !error.isOperational) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  const code = httpStatus.isHttpError(error.code) ? error.code : 500;

  // Response: Development => Programming Errors
  res.status(code).json({ message: error.message?.trim() || 'Unknown Error' });
};

module.exports = errorHandler;

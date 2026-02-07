const process = require('process');

let registered = false;

const shutdownHandlers = (server) => {
  if (registered) return;
  registered = true;

  if (!server || typeof server.close !== 'function') {
    throw new Error('shutdownHandlers requires an HTTP server instance');
  }

  const shutdown = (signal) => {
    console.info(`Received ${signal}. Shutting down gracefully...`);

    server.close(() => {
      console.info('HTTP server closed');
      process.exit(0);
    });

    setTimeout(() => {
      console.error('Force shutdown');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
};

module.exports = shutdownHandlers;

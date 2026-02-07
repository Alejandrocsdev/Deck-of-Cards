const process = require('process');

let registered = false;

const crashHandlers = () => {
  if (registered) return;
  registered = true;
	
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:');
		console.error(error);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Promise Rejection:');
		console.error(reason);
    process.exit(1);
  });
};

module.exports = crashHandlers;

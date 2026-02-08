require('dotenv').config({ quiet: true });

// Process-level crash handlers (FAIL FAST)
require('./process').crashHandlers();

const { connectMysql } = require('./config/db');

const express = require('express');
const port = Number(process.env.PORT) || 3000;

const { engine } = require('express-handlebars');

const { silence, notFound, errorHandler } = require('./middlewares');

const routes = require('./routes');

const start = async () => {
	// 1. Connect databases
  await connectMysql();

	// 2. Create app only after infra is ready
  const app = express();

  // Template Engine
  app.engine('.hbs', engine({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.set('views', './views');

  // Static Files
	app.use(express.json());
  app.use(express.static('public'));

  // Routes
  app.use(silence);
	app.get('/', (req, res) => res.render('home'));
  app.get('/health', (req, res) => res.json({ status: 'ok' }));
  app.use('/api', routes);

  // Error handling
  app.use(notFound);
  app.use(errorHandler);

  // 3. Start server
  const server = app.listen(port, () => {
    console.info('[Server] listening on port', port);
  });

  // Graceful shutdown (CLEAN EXIT)
  require('./process').shutdownHandlers(server);
};

// BOOTSTRAP
start().catch((error) => {
  console.error('[Server] startup aborted:');
	console.error(error);
  process.exit(1);
});

const { Router } = require('express');
const router = Router();

const decksController = require('../controllers/deck.controller');

router.post('/', decksController.createDeck);

module.exports = router;

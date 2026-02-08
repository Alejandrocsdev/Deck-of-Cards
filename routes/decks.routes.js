const { Router } = require('express');
const router = Router();

const decksController = require('../controllers/deck.controller');

router.post('/', decksController.createDeck);
router.post('/:uid/shuffle', decksController.shuffleDeck);

module.exports = router;

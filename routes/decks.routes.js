const { Router } = require('express');
const router = Router();

const decksController = require('../controllers/deck.controller');

router.post('/', decksController.createDeck);
router.post('/:uid/shuffle', decksController.shuffleDeck);
router.post('/:uid/draw', decksController.drawCards);

module.exports = router;

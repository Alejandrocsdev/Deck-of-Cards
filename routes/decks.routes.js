const { Router } = require('express');
const router = Router();

const decksController = require('../controllers/deck.controller');

router.post('/', decksController.createDeck);
router.post('/:uid/shuffle', decksController.shuffleDeck);
router.post('/:uid/draw', decksController.drawCards);
router.post('/:uid/piles/:pileName/add', decksController.addToPile);

module.exports = router;

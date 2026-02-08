const { Router } = require('express');
const router = Router();

const adminController = require('../controllers/admin.controller');

router.get('/decks', adminController.getDecks);
router.get('/decks/:uid', adminController.getDeck);

module.exports = router;

const { Router } = require('express');
const router = Router();

const decksRoutes = require('./decks.routes');
const adminRoutes = require('./admin.routes');

router.use('/decks', decksRoutes);
router.use('/admin', adminRoutes);

module.exports = router;

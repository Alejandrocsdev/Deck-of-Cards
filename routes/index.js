const { Router } = require('express');
const router = Router();

const usersRoutes = require('./users.routes');

router.use('/users', usersRoutes);

module.exports = router;

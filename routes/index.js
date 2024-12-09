const express = require('express');
const router = express.Router();

const askRoutes = require('./ask.routes');

router.use('/ask', askRoutes);

module.exports = router;
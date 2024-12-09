const express = require('express');
const router = express.Router();

const askRoutes = require('./ask.routes');
const translatorRoutes = require('./translator.routes');
const summaryGeneratorRoutes = require('./summaryGenerator.routes');
const weatherRoutes = require('./weather.routes');

router.use('/ask', askRoutes);
router.use('/translate', translatorRoutes);
router.use('/summarize', summaryGeneratorRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
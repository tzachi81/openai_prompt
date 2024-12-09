const express = require('express');
const router = express.Router();
const parser = require('../utils/translator.config');
const handlePromptController = require('../controllers/handlePrompt.controller');

router.post('/', handlePromptController.handlePrompt(parser));

module.exports = router;
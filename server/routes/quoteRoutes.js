const express = require('express');
const { getRandomQuote } = require('../controllers/quoteController');

const router = express.Router();

router.get('/random-quote', getRandomQuote);

module.exports = router;

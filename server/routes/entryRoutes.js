const express = require('express');
const { getEntries, getEntryById, addEntry, updateEntry, deleteEntry } = require('../controllers/entryController');

const router = express.Router();

router.get('/entries', getEntries);
router.get('/entries/:id', getEntryById);
router.post('/entries', addEntry);
router.put('/entries/:id', updateEntry);
router.delete('/entries/:id', deleteEntry);

module.exports = router;

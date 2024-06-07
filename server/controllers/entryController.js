const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

const getEntries = async (req, res) => {
  try {
    const entries = await db('gratitude_entries').select();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};

const getEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await db('gratitude_entries').where({ id }).first();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch entry' });
  }
};

const addEntry = async (req, res) => {
  const { content, quote_of_the_day } = req.body;
  try {
    const [id] = await db('gratitude_entries').insert({ content, quote_of_the_day });
    res.json({ id, content, quote_of_the_day });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add entry' });
  }
};

const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { content, quote_of_the_day } = req.body;
  try {
    await db('gratitude_entries').where({ id }).update({ content, quote_of_the_day });
    res.json({ id, content, quote_of_the_day });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update entry' });
  }
};

const deleteEntry = async (req, res) => {
  const { id } = req.params;
  try {
    await db('gratitude_entries').where({ id }).del();
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete entry' });
  }
};

module.exports = {
  getEntries,
  getEntryById,
  addEntry,
  updateEntry,
  deleteEntry
};

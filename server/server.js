require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const app = express();
app.use(cors());
app.use(express.json());

app.get('/random-quote', async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.get('/entries', (req, res) => {
  db('gratitude_entries').select('*')
    .then(entries => res.json(entries))
    .catch(err => res.status(500).json({ error: 'Failed to retrieve entries' }));
});

app.post('/entries', (req, res) => {
  const { content, quote_of_the_day } = req.body;

  db('gratitude_entries')
    .insert({ content, quote_of_the_day })
    .then(ids => res.status(201).json({ id: ids[0], content, quote_of_the_day }))
    .catch(err => res.status(500).json({ error: 'Failed to create entry' }));
});

app.get('/entries/:id', (req, res) => {
  const { id } = req.params;
  db('gratitude_entries').where({ id }).first()
    .then(entry => {
      if (entry) {
        res.json(entry);
      } else {
        res.status(404).json({ error: 'Entry not found' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Failed to retrieve entry' }));
});

app.put('/entries/:id', (req, res) => {
  const { id } = req.params;
  const { content, quote_of_the_day } = req.body;

  db('gratitude_entries').where({ id }).update({ content, quote_of_the_day })
    .then(count => {
      if (count) {
        res.json({ message: 'Entry updated successfully' });
      } else {
        res.status(404).json({ error: 'Entry not found' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Failed to update entry' }));
});

app.delete('/entries/:id', (req, res) => {
  const { id } = req.params;
  db('gratitude_entries').where({ id }).del()
    .then(count => {
      if (count) {
        res.json({ message: 'Entry deleted successfully' });
      } else {
        res.status(404).json({ error: 'Entry not found' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Failed to delete entry' }));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

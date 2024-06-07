const https = require('https');

function fetchQuote() {
  return new Promise((resolve, reject) => {
    https.get('https://api.quotable.io/random', (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

const getRandomQuote = async (req, res) => {
  try {
    const quote = await fetchQuote();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
};

module.exports = {
  getRandomQuote
};

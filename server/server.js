const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const quoteRoutes = require('./routes/quoteRoutes');
const entryRoutes = require('./routes/entryRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(quoteRoutes);
app.use(entryRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

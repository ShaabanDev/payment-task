const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use('/api', (req, res) => {
  res.send('welcome');
});

app.listen(port, () => {
  console.log('Server is running on port ', port);
});

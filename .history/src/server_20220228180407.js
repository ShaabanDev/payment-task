const express = require('express');
const dotenv = require('dotenv');
const payMobRouter = require('./routes/paymob-router');
const { FawryPayWithCard } = require('./controllers/fawry-controllers');

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/api', (req, res) => {
  res.send('');
});

app.use('/api', payMobRouter);

app.listen(port, () => {
  console.log('Server is running on port ', port);
});

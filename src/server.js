const express = require('express');
const dotenv = require('dotenv');
const payMobRouter = require('./routes/paymob-router');
const payTabs = require('./routes/paytabs-router');

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/api', (req, res) => {
  res.json({
    paymob: 'localhost:3000/api/paymob',
    paytabs: 'localhost:3000/api/paytabs',
  });
});

app.use('/api', payMobRouter);
app.use('/api', payTabs);

app.listen(port, () => {
  console.log('Server is running on port ', port);
});

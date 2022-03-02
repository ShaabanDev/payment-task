const { payWithPayTabs } = require('../controllers/paytabs-controllers');

const router = require('express').Router();

router.get('/paytabs/success', (req, res) => {
  res.status(200).send('success');
});

router.get('/paytabs', async (req, res) => {
  const redirectUrl = await payWithPayTabs();
  res.redirect(redirectUrl);
});
module.exports = router;

const { getPayKeyToken } = require('../controllers/paymob-controllers');

const router = require('express').Router();

router.get('/paymob/callback', (req, res) => {
  const data = req.query;
  res.json(data);
});
router.get('/paymob', async (req, res) => {
  const token = await getPayKeyToken();
  res.redirect(process.env.PAYMOB_IFRAME_URL + token.toString());
});
module.exports = router;

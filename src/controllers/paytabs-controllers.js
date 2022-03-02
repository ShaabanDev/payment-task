const { response } = require('express');

const axios = require('axios').default;

const payWithPayTabs = async () => {
  let redirectUrl;
  await axios
    .post(
      process.env.PAYTABS_PAYMENT_URL,
      {
        profile_id: process.env.PAYTABS_PROFILE_ID,
        tran_type: 'sale',
        tran_class: 'ecom',
        cart_id: '4244b9fd-c7e9-4f16-8d3c-4fe7bf6c48ca',
        cart_description: 'Dummy Order 35925502061445345',
        cart_currency: 'EGP',
        cart_amount: 46.17,
        callback: 'http://localhost:3000/api/paytabs/success',
        return: 'http://localhost:3000/api/paytabs/success',
      },
      {
        headers: {
          Authorization: process.env.PAYTABS_TEST_SERVER_API_KEY,
        },
      }
    )
    .then((response) => {
      redirectUrl = response.data.redirect_url;
    })
    .catch((err) => {
      console.log(err);
    });
  return redirectUrl;
};

module.exports = {
  payWithPayTabs,
};

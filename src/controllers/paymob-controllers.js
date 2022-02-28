const { axiosPost } = require('../utils/axios');

const getToken = async () => {
  const data = await axiosPost(process.env.PAYMOB_AUTH_TOKEN_URL, {
    api_key: process.env.PAYMOB_API_KEY,
  });
  return data.token;
};

const getOrder = async () => {
  const token = await getToken();
  const data = await axiosPost(process.env.PAYMOB_REGS_ORDER_URL, {
    auth_token: token,
    delivery_needed: 'false',
    amount_cents: '100',
    currency: 'EGP',
    items: [],
  });
  return { token, orderId: data.id };
};

const getPayKeyToken = async () => {
  const { token, orderId } = await getOrder();
  const data = await axiosPost(process.env.PAYMOB_PAYMENT_KEY_URL, {
    auth_token: token,
    amount_cents: '100',
    expiration: 3600,
    order_id: orderId,
    billing_data: {
      apartment: '803',
      email: 'claudette09@exa.com',
      floor: '42',
      first_name: 'Clifford',
      street: 'Ethan Land',
      building: '8028',
      phone_number: '+86(8)9135210487',
      shipping_method: 'PKG',
      postal_code: '01898',
      city: 'Jaskolskiburgh',
      country: 'CR',
      last_name: 'Nicolas',
      state: 'Utah',
    },
    currency: 'EGP',
    integration_id: process.env.PAYMOB_INTEGRATION_ID,
  });

  return data.token;
};

module.exports = {
  getPayKeyToken,
};

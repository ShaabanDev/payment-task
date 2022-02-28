const axios = require('axios').default;

const axiosPost = async (url, body) => {
  let data;
  await axios
    .post(url, body)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

module.exports = {
  axiosPost,
};

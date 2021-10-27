const axios = require('axios');
const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';


module.exports = async (_req, res) => {
  const { data } = await axios.get(ENDPOINT);
  res.status(200).json(data);
};

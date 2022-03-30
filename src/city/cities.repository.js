const axios = require('axios').default
const getCityByZipCode = async (zipCode) => {
  return await axios.get(`https://api.zippopotam.us/us/${zipCode}`)
};

module.exports = {
  getCityByZipCode
}

const citiesService = require("./cities.service");

const getCityByZipCode = async (req, res) => {
  try {
    const city = await citiesService.getCityByZipCode(req.params.zipCode);
    res.send(city);
  } catch (e) {
    res.send('No cities found!');
  }
};

module.exports = {
  getCityByZipCode
};

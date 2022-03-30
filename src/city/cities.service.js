const citiesRepository = require("./cities.repository");

const getCityByZipCode = async (zipCode) => {
  let cityString = "";
  const city = await citiesRepository.getCityByZipCode(zipCode);
  cityString = [city.data.places[0]["place name"], city.data.places[0]["state abbreviation"], city.data.country].join(", ");
  return cityString;
};

module.exports = {
  getCityByZipCode
};

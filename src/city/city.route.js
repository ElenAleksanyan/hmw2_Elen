const express = require('express');
const citiesController = require("./cities.controller");
const router = express.Router();

router.route('/:zipCode').get(citiesController.getCityByZipCode);

module.exports = router;

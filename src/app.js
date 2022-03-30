const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const routes = require('./city');

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
// v1 api routes
app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

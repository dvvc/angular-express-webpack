'use strict';

const error = require('../errors');


function notFound(req, res, next) {
  let err = new Error('Resource Not Found');
  err.status = 404;
  next(err);
}

function errorDev(err, req, res, next) {
  res.status(err.status || 500);
  console.log('ERROR DEV', err);
  console.log('ERROR!', err.stack);
  res.json(err);
}


function errorProd(err, req, res, next) {
  res.status(err.status || 500);
  console.log('ERROR!', err);
  res.json(err);
}

module.exports = {

  notFound: notFound,
  errorDev: errorDev,
  errorProd: errorProd,

};

'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const www = require('./www');
const errorMiddleware = require('./middlewares/errors');

// Routes
const routes = require('./routes/index');

const app = express();

console.log('=== STARTING APP in [' + app.get('env') + '] mode ===');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(errorMiddleware.notFound);

// error handlers
if (app.get('env') === 'development') {
  app.use(errorMiddleware.errorDev);
}
else {
  app.use(errorMiddleware.errorProd);
}


// Finally, start server
www.startServer(app)
  .then((server) => { console.log('====='); })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

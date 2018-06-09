'use strict'

const createError = require('http-errors');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const router = express.Router();

// Carrega as Rotas
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
const locationRoute = require('./routes/localizacaoRoute');

app.use(logger('dev'));
app.use(parser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', index);
app.use('/usuario', userRoute);
app.use('/localizacao', locationRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  

app.use(function(err, req, res, next) {
  if (app.get('env') !== 'development')
      delete err.stack;
  res.status(err.status).json({
      'error': {
          'message': err.message,
          'status': err.status,
          'stack': err.stack
      }
  });
});

 module.exports = app;
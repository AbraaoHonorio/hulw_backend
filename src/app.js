'use strict'


const express = require('express');
const app = express();

const router = express.Router();

// Carrega as Rotas
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
const locationRoute = require('./routes/localizacaoRoute');


// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', index);
app.use('/user', userRoute);
app.use('/localizacao', locationRoute);

 module.exports = app;

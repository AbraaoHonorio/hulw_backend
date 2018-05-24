'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });

    
});



module.exports = router;

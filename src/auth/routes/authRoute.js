'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const verifica_token = require('../verificaToken');

router.post('/login', controller.login);
router.get('/me', verifica_token, controller.me);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/avaliacaoDesempenhoController');

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/:id', controller.getById);

module.exports = router;
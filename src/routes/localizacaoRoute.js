const express = require('express');
const router = express.Router();
const controller = require('../controllers/localizacaoController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.get('/:id', controller.getById);
router.get('/usuario/:user_id', controller.getByUserId);
router.delete('/', controller.delete);

router.post('/', controller.post);
module.exports = router;

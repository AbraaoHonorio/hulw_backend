const express = require('express');
const router = express.Router();
const controller = require('../controllers/estagioProbatorioController');

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/:id', controller.getById);
router.get('/usuario/:id', controller.getByIdUsuario);
router.get('/ano/:id', controller.getByAno);
router.delete('/', controller.delete);

module.exports = router;

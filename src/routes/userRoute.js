const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/cpf/:cpf', controller.getByCpf);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
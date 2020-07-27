var express = require('express');
var router = express.Router();
const involucrateController = require('../controllers/involucrateController')

router.get('/formulario', involucrateController.formulario);
router.post('/formulario', involucrateController.enviarFormulario);


module.exports = router;
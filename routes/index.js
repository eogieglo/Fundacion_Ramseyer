var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home) 

//Recibir contacto
router.post('/contactanos', indexController.contact)

//Enviar newsletter
router.post('/teContactamos', indexController.sendNewsletter)

module.exports = router;
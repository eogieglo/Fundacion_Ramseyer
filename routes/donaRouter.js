var express = require('express');
var router = express.Router();
const donarController = require('../controllers/donarController');



router.get("/donar/transferencia", donarController.vista);
//router.post("/donar",donarController.mercadopago)





    

module.exports = router;

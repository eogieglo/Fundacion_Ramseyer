var express = require('express');
var router = express.Router();
const donarController = require('../controllers/donarController');



router.get("/donar", donarController.botonDonar);
//router.post("/donar",donarController)





    

module.exports = router;

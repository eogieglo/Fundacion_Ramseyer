var express = require('express');
var router = express.Router();
const donarController = require('../controllers/donarController');



router.get("/donar", donarController.vista);
//router.post("/donar",donarController)





    

module.exports = router;

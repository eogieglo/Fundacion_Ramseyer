var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;


//Recibir contacto
router.post('/contactanos', function (req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "enviofarmaciadigital@gmail.com",
      pass: "papitaloca23"
    }
  });

  let mailOptions = {
    from: "enviofarmaciadigital@gmail.com",
    to: "recibidofarmaciadigital@gmail.com",
    subject: req.body.asunto,
    html: "<p>Nombre : </p> " + req.body.nombre + "<br> <p>Email del sujeto : </p> " + req.body.email + "<br> <p>Mensaje : </p> " + req.body.mensaje

  }

  transporter.sendMail(mailOptions, (err, data) => {
    res.redirect("/")
  })
})


//Enviar newsletter
router.post('/teContactamos', function (req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "enviofarmaciadigital@gmail.com",
      pass: "papitaloca23"
    }
  });

  let mailOptions = {
    from: "enviofarmaciadigital@gmail.com",
    to: req.body.email,
    subject: "Hola, nos contactamos desde la Fundación Ramseyer",
    html: "<p> Mensaje a poner </p>"

  }

  transporter.sendMail(mailOptions, (err, data) => {
    res.redirect("/")
  })
})
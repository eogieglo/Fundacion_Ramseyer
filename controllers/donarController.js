var mercadopago = require('mercadopago');

const controller = {
  vista: function(req, res){
    res.render('formularioDonar.ejs')
  },
  envioMp: function(req, res){
  mercadopago.configurations.setAccessToken("TEST-1227402768972097-072917-b96ee615b1f387ba4f4d9253f495cb6b-339384946");

var payment_data = {
  transaction_amount: 138,
  token: 'token',
  description: 'Intelligent Granite Plate',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test@test.com'
  }
};

mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });

  }



    /* botonDonar: function(req, res){
        mercadopago.configure({
            access_token:'TEST-1227402768972097-072917-b96ee615b1f387ba4f4d9253f495cb6b-339384946',
            sandbox: true
          });
        var preference = {
            items: [
              {
                title: 'Donacion',
                quantity: 1,
                unit_price: 10.5
              }
            ]
          };
          mercadopago.preferences.create(preference).then(function (data) {
              console.log(data.response.id)
            res.render('formularioDonar', {
              preference: data
            });
          }).catch(function (error) {
            res.render('error', {
              error: error
            });
          });
    } */
}

module.exports = controller;
var mercadopago = require('mercadopago');

mercadoPago = function (req, res) {
  var preference = {
    items: [
      {
        title: 'Test',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 10.5
      }
    ]
  };

  mercadopago.preferences.create(preference).then(function (data) {
    res.render('formularioDonar', {
      preference: data
    });
  }).catch(function (error) {
    res.render('500', {
      error: error
    });
  });
};



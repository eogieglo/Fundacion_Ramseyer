window.Mercadopago.setPublishableKey("TEST-7f6e5c80-e87a-42d9-8da4-b35fb07143c0");
window.Mercadopago.getIdentificationTypes('#docType');

document.getElementById('cardNumber').addEventListener('keyup', guessPaymentMethod);
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);

function guessPaymentMethod(event) {
    let cardnumber = document.getElementById("cardNumber").value;
    if (cardnumber.length >= 6) {
        let bin = cardnumber.substring(0,6);
        console.log(bin);
        window.Mercadopago.getPaymentMethod({
            "bin": bin
        }, setPaymentMethod);
    }
};

function setPaymentMethod(status, response) {
    if (status == 200) {
        let paymentMethodId = response[0].id;
        let element = document.getElementById('payment_method_id');
        element.value = paymentMethodId;
      //  window.Mercadopago.getInstallments();
    } else {
        alert(`payment method info error: ${response}`);
    }
}

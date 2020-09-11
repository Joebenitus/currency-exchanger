import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from "./js/conversions.js"
import currencyCodes from "./js/codes.js"

$(document).ready(function() {
  $("#btn-submit").click(function() {
    let currency1 = $("#currency1").val().toUpperCase();
    let currency2 = $("#currency2").val().toUpperCase();
    let amount = parseFloat($("#amount").val());
    if ((currency1 && currency2 && amount) && currency1 in currencyCodes && currency2 in currencyCodes) {
      let promise = Exchange.convert(currency1);
      promise.then(function(response) {
        const body = JSON.parse(response);
        let conversion = (parseFloat(body.conversion_rates[currency2]) * amount).toFixed(2)
        $(".showConversion").text(`${amount} ${currencyCodes[currency1]} = ${conversion} ${currencyCodes[currency2]}`);
      }, function(error) {
        $(".showError").text(`There was an error processing your request: ${error}`);
      })
    } else {
      $(".showConversion").text("Invalid input(s)");
    }
    
  });
});


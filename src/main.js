import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from "./js/conversions.js"

$(document).ready(function() {
  $("#btn-submit").click(function() {
    let usd = $("#dollar-amt").val();
    let currency = $("#currency").val();
    let promise = Exchange.convert();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".showConversion").text(`${usd} US dollars equals ${body.conversion_rates.currency}`);
    }, function(error) {
      $(".showError").text(`There was an error processing your request: ${error}`);
    })
  });
});


/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    var numberField = $("#inputField");
    $("td").click(function () {
        if (numberField.val() === "0") {
            numberField.val("");
        }
        if ($(this).text() === "=") {
            numberField.val(eval(numberField.val()));
        } else if ($(this).text() === "C") {
            numberField.val("0");
        } else if ($(this).text() === "+-") {
            if (numberField.val()[0] === "-") {
                numberField.val(numberField.val().slice(1));
            } else {
                numberField.val("-" + numberField.val());
            }
        } else if ($(this).text() === "x") {
            numberField.val(numberField.val() + "*");
        } else {
            numberField.val(numberField.val() + $(this).text());
        }
    });
});

/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Listen to the click event on the span with the id of button
// 2) When you click on it retrieve the value from the input element and 
// add it to the unordered list as a "li" element
// 3) Can you add a remove button beside each list item that will remove it from the list if clicked?
//
$(function () {
    'use strict';

    function createLiWithText(text) {
        var newLi = $('<li>'),
            delSpan = $('<span>');
        delSpan.click(function () {
            newLi.remove();
        });
        delSpan.text(" DELETE");
        newLi.text(text);
        newLi.append(delSpan);
        return newLi;
    }

    $('#button').click(function () {
        var input = $('#itemName').val();
        $('#itemName').val("");
        $('ul').append(createLiWithText(input));
    });
});

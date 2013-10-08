/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*global $ */
$(function () {
    'use strict';
    $('span').click(function () {
        var inputValue = $('#myInput').val(),
            newParagraph = $('<p>');
        newParagraph.text(inputValue);
        $('h1').after(newParagraph);
        $('#myInput').val("");
    });
    return;
});

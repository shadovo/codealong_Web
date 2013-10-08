/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Listen to the click event on the span with the id of button
// 2) When you click on it retrieve the value from the input element and 
// add it to the unordered list as a "li" element
// 3) Can you add a remove button beside each list item that will remove it from the list if clicked?
//
$(function () {
	"use strict";
	$("#button").click(function () {
		var itemText = $("#itemName").val(),
			listItem = $("<li>"),
			removeButton = $("<span>remove</span>");
		itemText = $.trim(itemText);
		if (itemText !== "") {
			removeButton.addClass("remove");
			removeButton.click(function () {
				listItem.remove();
				$("#itemName").focus();
			});
			listItem.text(itemText);
			listItem.append(removeButton);
			//<li>bread<span>remove</span></li>
			$("ul").append(listItem);
			$("#itemName").val("").focus();
		}
	});
});

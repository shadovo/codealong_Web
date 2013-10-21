/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// Listen to the click event on the span with the id of button
// when you click on it retrieve the value from the input element and 
// add it to the unordered list as a "li" element 
$(function () {
	"use strict";
	var items = ["bread", "eggs", "ham", "cola", "whiskey"],
		loadItems, saveItems, displayItem;
	displayItem = function (itemText) {
		var listItem = $("<li>"),
			itemSpan = $("<span>"),
			removeButton = $("<span>remove</span>");
		removeButton.addClass("remove");
		removeButton.click(function () {
			listItem.remove();
			saveItems();
			$("#itemName").focus();
		});
		itemSpan.text(itemText);
		listItem.append(itemSpan);
		listItem.append(removeButton);
		//<li>bread<span>remove</span></li>
		$("ul").append(listItem);
		$("#itemName").val("").focus();
	};
	loadItems = function () {
		// use a loop and the displayItem function to 
		// show all the items in the items array
		if(localStorage.items === undefined){
			items = [];
		} else {
			items = JSON.parse(localStorage.items);
		}
		var i = 0;
		for (i = 0; i < items.length; i = i + 1) {
			displayItem(items[i]);
		}
	};
	saveItems = function () {
		// reset the items array to an empty array
		// loop through all the li's in the ul
		// and push the text they contain into the items array
		// console log out your array to make sure it works
		items = [];
		$("li").each(function ( index, element) {
			//<li><span>bread</span><span>remove</span></li>
			items.push($(element).children().first().text());
		});
		localStorage.items = JSON.stringify(items);
		console.log(items);
	};
	$("#button").click(function () {
		var itemText = $("#itemName").val();
		itemText = $.trim(itemText);
		if (itemText !== "") {
			displayItem(itemText);
			saveItems();
		}
	});
	// execute the loadItems function here so 
	// it is triggered when the page loads for the 
	// first time
	loadItems();
});
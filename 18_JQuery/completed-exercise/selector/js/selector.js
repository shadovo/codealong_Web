// Dom content ready
$(function(){
	$('input[name="toggleButton"]').click(function () {
		$('#myDiv').toggle();
	});
	// Step 1. Get css buttons to work.
	$('input[name="addClass"]').click(function () {
		$('#myDiv').addClass("yellow");
	});
	
	
	$('input[name="removeClass"]').click(function () {
		$('#myDiv').removeClass("yellow");
	});
	$('input[name="toggleClass"]').click(function () {
		$('#myDiv').removeClass("yellow").toggleClass("green");
	});
	// Step 2. When you click on an image of a kittler you change
	// the class of the bottom div. Tip you will need to chain. You will need $(this)  parents and children.
	
	$('img[src^="http://www."]').click(function(){
		$(this).parent().children("div").removeClass("green").addClass("red");
	});
	// Step 3. When you click on either of the animals dressed as other animals you change the 
	// text in the bottom div to have the value of the attribute alt of the image you clicked on.
	$('img[src^="http://2"]').click(function(){
		var alt = $(this).attr("alt");
		$(this).parent().children("div").text(alt).addClass("green");
	});
});










$(function(){
	var showWelcome = function () {
		$("#login").hide();
		$("#welcome").show();
		$(".user").text(localStorage.user);
	};

	var showLogin = function () {
		$("#login").show();
		$("#welcome").hide();
	};

	$("#loginButton").click(function () {
		localStorage.user = $("#username").val();
		localStorage.pass = $("#pass").val();
		showWelcome();
	});

	if (localStorage.user !== undefined && localStorage.pass !== undefined) {
		showWelcome();
	} else {
		showLogin();
	}
	// 1) Using two localStorage variables save the username
	// and password when you click on loginButton
	// 2) Also hide the login div and show the welcome div.
	// 3) Collect the username from localStorage and display it in the user span
	// Check that it works using chrome dev tools -- resources tab
	// Delete the localstorage using dev tools

	// 4) Make it so that if you haven't already visited 
	// the site you hide the welcome div and show the login div 
	// when the page loads 
	// If you have already logged in hide the login div and
	// show the welcome div with the users name dispalyed in the span

});
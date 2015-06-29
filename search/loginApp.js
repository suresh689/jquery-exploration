// JavaScript Document 
$(document).on("ready", function () {
	window.sessionStorage.clear();

	$("._login_button").on("click", onLogin);
	$(".userLogin").on("submit", onLogin);


	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	function onLogin(event) {
		event.preventDefault();
		var user = $("#_user").val(),
			pass = $("#_pass").val();
		if (user.length > 0 && pass.length > 0) {
			if (validateEmail(user) != false) {
				if (user.trim().search('@gmail.com') > -1) {
					$.ajax({
						type: "POST",
						url: 'https://user logn service', // user login service url
						data: {
							"username": user,
							"password": pass
						}
					}).done(function (data) {
						window.location.href = "index.html"


					}).fail(function (e) {

						$(".row_3 p").html("Error : The username / password you provided is incorrect Please try again");
						//$("#_user,#_pass").val("")
						$("#_pass").attr("placeholder", "Password");
						$("#_user").attr("placeholder", "Username");
					});
				} else {
					$(".row_3 p").html("Error : Invalid email please try again").stop().fadeIn();

				}
			} else {
				$(".row_3 p").html("Error : Your username is incorrect Please try again");
				//$("#_user,#_pass").val("")
				$("#_pass").attr("placeholder", "Password");
				$("#_user").attr("placeholder", "Username");


			}
		} else {

			$(".row_3 p").html("Error : The username / password you provided is incorrect Please try again");
			$("#_user,#_pass").val("")
			$("#_pass").attr("placeholder", "Password");
			$("#_user").attr("placeholder", "Username");
		}
		window.location.href = "index.html"
	}

});

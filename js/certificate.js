$( function() {
	inputs = ['#spinnerCP', '#spinnerCN', '#spinnerCD', '#spinnerCQ', '#spinnerCL', '#spinnerCT', '#spinnerCB']; // ID of each input that will turn into a spinner
	var spinners = []; // array to hold spinner objects
	for (var i = 0; i < inputs.length; i++) {
		spinners[i] = $(inputs[i]).spinner();
	}
	$('#submitC').on('click', function(e) {
		e.preventDefault();
		coins_worth = [1, 5, 10, 25, 100, 200, 500]; // value of each coin (and the $5 bill) in cents
		sum = 0;
		for (var i = 0; i < inputs.length; i++) {
			sum += $(inputs[i]).spinner("value") * coins_worth[i]; // sum all the coins the user selected
		}

		$('#answer').remove(); // remove any previous back
		if (sum == 843) { // 843 is the coorect answer to the certificate question
			$("<p style='color:blue' id='answer'>GOOD JOB &#10004;</p>").insertAfter('#submitC').hide().fadeIn('slow'); // give feedback to user
			$('#certificate-name').removeAttr('readonly'); // unlock the certificate
			$("#certificate-name").attr("placeholder", "My Name");
		} else {
			$("<p style='color:red' id='answer'>Nice Try! But your answer is not correct!</p>").insertAfter('#submitC').hide().fadeIn('slow'); // feedback for wrong answer
		}
		var reply = $('#answer');
		var difference = (reply.parent().next().offset().top) -  ($(window).scrollTop() + $(window).innerHeight());
		// .parent().parent().next brings us to <hr> element separating questions

		// var difference is the difference in pixels, between the response and the end of user's screen
		// if the respnose is below the end of user's screen, scroll the screen down

		if(difference > - 5){ // <hr> not fully in view

			$("html, body").animate({ scrollTop: $(window).scrollTop() + difference + 5}, "slow");
			// scroll down to the <hr> indicating end of question. (+5 pixels to make the <hr> fully visible).
		}
	});
	$('#print-button').on('click', function() {
		if ($("#certificate-name").attr("placeholder") == "My Name") {
			window.print(); // opens devices own print dialog box
		} else {
			alert('You must solve the question before getting to print the certificate.'); //user tried to print before unlocking certificate
		}
	});
});

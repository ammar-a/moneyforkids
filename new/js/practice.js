$( function()  {
	//Build the spinners
	inputs = ['#spinner1c','#spinner2c', '#spinner2q','#spinner3d','#spinner4n', '#spinner4l', 
				'#spinner5n', '#spinner6q', '#spinner6l', '#spinner7c', '#spinner7l', '#spinner8t']; // all spinner ids

	spinners = [];  // References to spinner objects stored in here
	for (var i = 0; i < inputs.length; i++) {
		spinners[i] = $(inputs[i]).spinner({
			min : 0
		});
	}

	answers = ['no question 0', 7, 27, 70, 105, 10, 250, 333, 1000]; // answers to questions, corresponding indices to question number
	values = {'c' : 1, // cents
			  'n' : 5, // nickels
			  'd' : 10, //dimes ... etc
			  'q' : 25,
			  'l' : 100,
			  't' : 200	}

	$(':submit').on('click', function(e) { // function to check answer
		question = this.id.slice(-1); // question number being answered
		sum = 0
		for (var i = 0; i < inputs.length; i++) { // loop through spinner ids to find corresponding spinners to question 
			if (inputs[i].slice(-2,-1) == question) { // if spinner is for this question
				type_of_coin = inputs[i].slice(-1); // type of coin: cents, nickels, loonies etc
				sum += spinners[i].spinner("value") * values[type_of_coin];
			}
		}
		if (sum == answers[question]) {
			respone('correct', this.id);
		} else {
			respone('incorrect', this.id);
		}
	});

	function respone(reply, question_number) {

		$("#" + question_number).next().remove(); //Remove any previous response
		if (reply == 'correct') {
			$("<p style='color:blue'>GOOD JOB &#10004;</p>").insertAfter('#' + question_number).hide().fadeIn('slow');
		} else {
			$("<p style='color:red'>Nice Try! But your answer is not correct!</p>").insertAfter('#' + question_number).hide().fadeIn('slow');
		}

		var reply = $('#' + question_number).next();
		var difference = (reply.parent().parent().next().offset().top) -  ($(window).scrollTop() + $(window).innerHeight());
		// .parent().parent().next brings us to <hr> element separating questions

		// var difference is the difference in pixels, between the response and the end of user's screen
		// if the respnose is below the end of user's screen, scroll the screen down

		if(difference > - 5){ // <hr> not fully in view

			$("html, body").animate({ scrollTop: $(window).scrollTop() + difference + 5}, "slow");
			// scroll down to the <hr> indicating end of question. (+5 pixels to make the <hr> fully visible).
		}
	}
});
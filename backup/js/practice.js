$( function()  {
	//Build the spinners
	inputs = ['#spinner1','#spinner2p', '#spinner2q','#spinner3d','#spinner4n', '#spinner4l', '#spinner5n']; 
	spinners = [];
	for (var i = 0; i < inputs.length; i++) {
		spinners[i] = $(inputs[i]).spinner();
	}

	$(':submit').on('click', function(e) {
		e.preventDefault();
		var id = this.id;
		if (id == "submit1") {
			if (spinners[0].spinner("value") == 7) {
				respone('correct', id);
			}
			else {
				respone('incorrect', id)
			}
		} else if (id == "submit2") {
			if (spinners[1].spinner("value") + spinners[2].spinner("value") * 25 == 27) {
				respone('correct', id);
			} else {
				respone('incorrect', id)	
			}
		} else if (id == "submit3") {
			if (spinners[3].spinner("value") * 10 == 70) {
				respone('correct', id);
			} else {
				respone('incorrect', id)	
			}
		} else if (id == "submit4") {			
			if (spinners[5].spinner("value") * 100 + spinners[4].spinner("value") * 5 == 105 ) {
				respone('correct', id);
			} else {
				respone('incorrect', id)	
			}
		} else if (id == "submit5") {
			if (spinners[6].spinner("value") * 5 == 10 ) {
				respone('correct', id);
			} else {
				respone('incorrect', id)	
			}
			window.scrollTo(0,document.body.scrollHeight);
		}
	})

	function respone(reply, question_number) {
		$("#"+question_number).next().remove();
		if (reply == 'correct') {
			$("<p style='color:blue'>GOOD JOB &#10004;</p>").insertAfter('#' + question_number).hide().fadeIn('slow');
		} else {
			$("<p style='color:red'>Nice Try! But your answer is not correct!</p>").insertAfter('#' + question_number).hide().fadeIn('slow');
		}
	}
});
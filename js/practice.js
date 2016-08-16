$( function()  {
	//Build the spinners
	spinners = [1,'2p', '2q',3,4]; 
	for (var i = 0; i < 5; i++) {
		$("#spinner"+spinners[i]).spinner();
	}

	$(':submit').on('click', function(e) {
		e.preventDefault();
		var id = this.id;
		console.log(id);
		if (id == "submit1") {
			var spinner1 = $( "#spinner1" ).spinner();
			if (spinner1.spinner("value") == 7) {
				respone('correct', id);
			}
			else {
				respone('incorrect', id)
			}
		} else if (id == "submit2") {
			var spinner2p = $( "#spinner2p" ).spinner();
			var spinner2q = $( "#spinner2q" ).spinner();
			if (spinner2p.spinner("value") + spinner2q.spinner("value") * 25 == 27) {
				respone('correct', id);
			} else {
				respone('incorrect', id)	
				console.log(spinner2p.spinner("value") + spinner2q.spinner("value") * 25);
			}
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
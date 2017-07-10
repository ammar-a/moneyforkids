$( function() {
	inputs = ['#spinnerCP', '#spinnerCN', '#spinnerCD', '#spinnerCQ', '#spinnerCL', '#spinnerCT', '#spinnerCB'];
	var spinners = [];
	for (var i = 0; i < inputs.length; i++) {
		spinners[i] = $(inputs[i]).spinner();
	}
	$('#submitC').on('click', function(e) {
		e.preventDefault();
		coins_worth = [1, 5, 10, 25, 100, 200, 500];
		sum = 0;
		for (var i = 0; i < inputs.length; i++) {
			sum += $(inputs[i]).spinner("value") * coins_worth[i];
		}

		$('#answer').remove();
		if (sum == 843) {
			$("<p style='color:blue' id='answer'>GOOD JOB &#10004;</p>").insertAfter('#submitC').hide().fadeIn('slow');
			$('#certificate-name').removeAttr('readonly');
			$("#certificate-name").attr("placeholder", "My Name");
		} else {
			$("<p style='color:red' id='answer'>Nice Try! But your answer is not correct!</p>").insertAfter('#submitC').hide().fadeIn('slow');
		}
	})
	$('#print-button').on('click', function() {
		console.log('click');
		if ($("#certificate-name").attr("placeholder") == "My Name") {
			window.print();
		} else {
			alert('You must solve the question before getting to print the certificate.');
		}
	})
})
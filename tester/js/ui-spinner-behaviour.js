$( function() {
	// this code prevents the jQuery spinner from giving focus to the input box
	// giving focus to the input brings up the soft(touch) keyboard which the user may not have wanted
	// soft keyboard only pops up now when the user specifically clicks the input box
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // Apply to mobile screens only
		$('input').attr('readonly', 'readonly'); // make all inputs read only
		$('input:not(#certificate-name)').on('click', function() {
			$(this).removeAttr('readonly').select(); // when input is directly clicked, allow user to type
		});
		$('input').on('blur', function() {
			$(this).attr('readonly', 'readonly'); // make input readonly again after user is done typing
		});

	}
});
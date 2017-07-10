$( function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('input').attr('readonly', 'readonly');
		$('input').on('click', function() {
			$(this).removeAttr('readonly').select();
		});
		$('input').on('blur', function() {
			$(this).attr('readonly', 'readonly');
		});

	}
})
$( function() {

	
	$.ajaxSetup({
      cache: true // faster scripts
	});


	$('#container').load('learn.html').hide().fadeIn(1000); // Load initial page

    $('nav a').on('click', function(e) {                 // User clicks nav link
	    e.preventDefault();                                // Stop loading new link
	    var url = this.href;                               // Get value of href

	    $('nav a.current').removeClass('current');         // Clear current indicator
	    $(this).addClass('current');                       // New current indicator

	    $('#content').remove(); 
	    $('#container').load(url).hide().fadeIn(1000); // Load content with AJAX
	});
});
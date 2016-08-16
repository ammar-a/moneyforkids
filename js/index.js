$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#content').remove(); 
  if (url.slice(-13) == "practice.html") {
  	$('#container').load(url).hide().fadeIn('slow');
  } else {
  	$('#container').load(url + " #content", function() {
  		$.getScript("js/repeatPictures.js");
  		console.log("got repeatPictures.js");
  	}).hide().fadeIn('slow');
  }
});
$( function() {
    $.ajaxSetup({
      cache: true // faster scripts
    });

  $('nav a').on('click', function(e) {                 // User clicks nav link
    e.preventDefault();                                // Stop loading new link
    var url = this.href;                               // Get value of href

    $('nav a.current').removeClass('current');         // Clear current indicator
    $(this).addClass('current');                       // New current indicator

    $('#content').remove(); 
    $('#container').load(url + " #content").hide().fadeIn(1500); // Load content with AJAX


    if (url.slice(-13) == "practice.html") {
      $.getScript("js/practice.js");
      $.getScript("js/ui-spinner-behaviour.js");

    } else if (url.slice(-16) == "certificate.html") {
      $.getScript("js/certificate.js");
      $.getScript("js/ui-spinner-behaviour.js");
      $('#angular').remove(); //Remove any previous angular script tag
      $('<script id="angular" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>').insertAfter('section'); // Reload the script
    } else {
        $.getScript("js/repeatPictures.js");
    }
  });

  if ($('nav a')[2].scrollWidth >  $('nav a').innerWidth()) {
      //Text has over-flowed
      $('nav a').css('width', '40%'); // stack the tabs
      $('nav a').css('font-size', '0.5em');

  }
  
})
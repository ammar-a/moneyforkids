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


    if (url.slice(-13) == "practice.html") { // Load appropriate sscripts
      $.getScript("js/practice.js");
      $.getScript("js/ui-spinner-behaviour.js");

    } else if (url.slice(-16) == "certificate.html") {
      $.getScript("js/certificate.js");
      $.getScript("js/boot_angular.js");
      $.getScript("js/ui-spinner-behaviour.js");
    } else {
        $.getScript("js/repeatPictures.js");
    }
  });
});

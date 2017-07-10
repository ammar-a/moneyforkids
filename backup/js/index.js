$( function() {

    $('nav a').on('click', function(e) {                 // User clicks nav link
      e.preventDefault();                                // Stop loading new link
      var url = this.href;                               // Get value of href

      $('nav a.current').removeClass('current');         // Clear current indicator
      $(this).addClass('current');                       // New current indicator

      $('#content').remove(); 
      $('#container').load(url + " #content").hide().fadeIn('slow');



      if (url.slice(-13) == "practice.html") {
        $.getScript("js/practice.js");
      $.getScript("js/ui-spinner-behaviour.js");

      } else if (url.slice(-16) == "certificate.html") {
        $.getScript("js/certificate.js");
      $.getScript("js/ui-spinner-behaviour.js");
        $.getScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js");
      } else {
      		$.getScript("js/repeatPictures.js");
      }
    });
})
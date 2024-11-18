$(document).ready(function() {
    if ($(document).width() < 600) {
      $("#hamburger_icon").removeClass("hidden");
      $("#navigation").addClass("hidden");
      console.log('Right button clicked!');
    } else {
      $("#hamburger_icon").addClass("hidden");
      $("#navigation").removeClass("hidden");
    }
  });



  $(window).resize(function() {
      if ($(document).width() < 600) {
          $("#hamburger_icon").removeClass("hidden");
          $("#navigation").addClass("hidden");
          console.log('left button clicked!');
      } else {
          $("#hamburger_icon").addClass("hidden");
          $("#navigation").removeClass("hidden");
      }
    });


$("#hamburger_icon").click(function() {
      if ($("#navigation").hasClass("hidden")) {
          $("#navigation").removeClass("hidden");
          console.log('um button clicked!');
        } else {
          $("#navigation").addClass("hidden");
        }
  });

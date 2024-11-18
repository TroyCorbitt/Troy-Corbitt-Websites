 $("#hamburger_icon").click(function() {
   if ($("#hamburger_icon").hasClass("active")) {
     $("#hamburger_icon").removeClass("active");
    } else {
      $("#hamburger_icon").addClass("active");
    }
  });

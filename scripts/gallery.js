// when #gallery-thumb1" is clicked:
    // remove .hidden from #gallery-figure1
    // add .active-thumbnail to #gallery-thumb1
    // add .hidden to #gallery-figure2
    // add .hidden to #gallery-figure3

    $("#gallery-thumb1").click(function() {
        $("#gallery-figure1").removeClass("hidden");
        $("#gallery-thumb1").addClass("active-thumbnail");
        $("#gallery-figure2").addClass("hidden");
        $("#gallery-thumb2").removeClass("active-thumbnail");
        $("#gallery-figure3").addClass("hidden");
        $("#gallery-thumb3").removeClass("active-thumbnail");
        $("#gallery-figure4").addClass("hidden");
        $("#gallery-thumb4").removeClass("active-thumbnail");
    });

    $("#gallery-thumb2").click(function() {
        $("#gallery-figure1").addClass("hidden");
        $("#gallery-thumb1").removeClass("active-thumbnail");
        $("#gallery-figure2").removeClass("hidden");
        $("#gallery-thumb2").addClass("active-thumbnail");
        $("#gallery-figure3").addClass("hidden");
        $("#gallery-thumb3").removeClass("active-thumbnail");
        $("#gallery-figure4").addClass("hidden");
        $("#gallery-thumb4").removeClass("active-thumbnail");
    });

    $("#gallery-thumb3").click(function() {
        $("#gallery-figure1").addClass("hidden");
        $("#gallery-thumb1").removeClass("active-thumbnail");
        $("#gallery-figure2").addClass("hidden");
        $("#gallery-thumb2").removeClass("active-thumbnail");
        $("#gallery-figure3").removeClass("hidden");
        $("#gallery-thumb3").addClass("active-thumbnail");
        $("#gallery-figure4").addClass("hidden");
        $("#gallery-thumb4").removeClass("active-thumbnail");
    });

    $("#gallery-thumb4").click(function() {
        $("#gallery-figure1").addClass("hidden");
        $("#gallery-thumb1").removeClass("active-thumbnail");
        $("#gallery-figure2").addClass("hidden");
        $("#gallery-thumb2").removeClass("active-thumbnail");
        $("#gallery-figure3").addClass("hidden");
        $("#gallery-thumb3").removeClass("active-thumbnail");
        $("#gallery-figure4").removeClass("hidden");
        $("#gallery-thumb4").addClass("active-thumbnail");
    });

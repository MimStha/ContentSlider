$(function () {
    "use strict";
// Configurations
    var slide = ".slide";
    var active = ".active";
    var oldActive = ".oldActive";
    var animationSpeed = 500;
    var auotAnime = true;
    var autoAnimeSpeed = 5000;

    // Show first slide and hide others as soon as document loads
    $(slide).first().addClass("active");
    $(slide).hide();
    $(active).show();
    // Previous event
    $("#prev").on("click", previous);
    // Next event
    $("#next").on("click", next);

// Previous event handler
    function previous () {
        $(active).removeClass("active").addClass("oldActive");
        if ($(oldActive).is(":first-child")) {
            $(slide).last().addClass("active");
        } else {
            $(oldActive).prev().addClass("active");
        }
        $(oldActive).removeClass("oldActive");
        $(slide).fadeOut(animationSpeed);
        $(active).fadeIn(animationSpeed);
    }

// Next event handler
    function next () {
        $(active).removeClass("active").addClass("oldActive");
        if ($(oldActive).is(":last-child")) {
            $(slide).first().addClass("active");
        } else {
            $(oldActive).next().addClass("active");
        }
        $(oldActive).removeClass("oldActive");
        $(slide).fadeOut(animationSpeed);
        $(active).fadeIn(animationSpeed);
    }

    if (auotAnime) {
        setInterval(function () {
            next();
        }, autoAnimeSpeed);
    }

});
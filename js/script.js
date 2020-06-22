"use strict";

$(function () {
  //Nav-Bar
  (function () {
    const docElem = document.documentElement,
      changeHeaderOn = 70;
    let didScroll = false;
    function __init__() {
      window.addEventListener(
        "scroll",
        function () {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 100);
          }
        },
        false
      );
    }

    function scrollPage() {
      let y = scrollY();
      if (y >= changeHeaderOn) {
        $("#header-nav").addClass("active");
      } else {
        $("#header-nav").removeClass("active");
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    //END NAV_BAR

    //CALL_INIT__NAV_BAR
    __init__();

    function videoResp() {
      var mainVideo = $("#video-header");

      const medQualVersionSrc = "assets/intro-med.mp4";
      const highQualVersionSrc = "assets/intro.mp4";
      if ($(window).width() < 500) {
        mainVideo.append(
          "<source type='video/mp4' src='' data-src='" +
            medQualVersionSrc +
            "' />"
        );
      } else {
        mainVideo.append(
          "<source type='video/mp4' src='' data-src='" +
            highQualVersionSrc +
            "' />"
        );
      }
    }

    videoResp();
  })();
});

//BLUR
$(window).on("scroll", function () {
  let pixs = $(document).scrollTop();
  pixs = pixs / 270;
  $(".unique").css({
    "-webkit-filter": "blur(" + pixs + "px)",
    filter: "blur(" + pixs + "px)",
  });
});

$(function deferVideo() {
  //defer html5 video loading
  $("video source").each(function () {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    $(this).removeAttr("data-src");
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

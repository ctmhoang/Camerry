$(document).ready(function () {
  "use strict";
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

    __init__();
  })();
});

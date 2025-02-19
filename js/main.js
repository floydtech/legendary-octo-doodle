$(document).ready(function () {
  $(".partner-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: false,
    prevArrow: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Normal -> Add navbar-dark
// Scroll > 100 -> Add navbar-light & bg-light

$(window).scroll(function () {
  if ($(this).scrollTop() >= 800) {
    $("nav").removeClass("navbar-dark");
    $("nav").addClass("navbar-light");
    $("nav").addClass("bg-light");
  } else {
    $("nav").addClass("navbar-dark");
    $("nav").removeClass("navbar-light");
    $("nav").removeClass("bg-light");
  }
});

$(function () {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
    navMain.collapse("hide");
  });
});

function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

// COUNTER START
function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("p[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

// COUNTER END

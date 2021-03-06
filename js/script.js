window.addEventListener("load", () => {
  let loader = document.getElementById("loader");
  loader.classList.add("hidden");

  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    // Waits 1000ms after typing "First"
    strings: ["Software Engineer.", "Web Developer.", "Student."],
    typeSpeed: 70,
    loop: true,
    showCursor: true,
    startDelay: 1000
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });

  $("[data-fancybox]").fancybox();
});

window.addEventListener("scroll", () => {
  let posY;
  posY = window.scrollY;
  let className = document.getElementById("test").className;
  let checkClass = className.split(" ").pop();
  if (posY > 670) {
    if (checkClass === "check") {
      var element = document.querySelectorAll(".chart");
      element.forEach(el => {
        new EasyPieChart(el, {
          easing: "easeInOut",
          barColor: "#fff",
          trackColor: false,
          scaleColor: false,
          lineWidth: 4,
          size: 150
        });
      });
      document.getElementById("test").classList.remove("check");
    }
  }
});

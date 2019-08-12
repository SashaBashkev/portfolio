$(document).ready(() => {
  $(".nav-toggle").on("click", () => {
    $(".nav-menu").toggleClass("slide");
  });
  $(window).resize(() => {
    if ($(window).innerWidth() > 700 && $(".nav-menu").has("slide")) {
      $(".nav-menu").removeClass("slide");
    }
  });
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1400
    );
  });

  if ($(window.location.hash).length > 1) {
    $("html, body").animate(
      {
        scrollTop: $(window.location.hash).offset().top
      },
      1400
    );
  }
  $(window).scroll(() => {
    if (window.pageYOffset >= 600) {
      $(".nav-menu").removeClass("slide");
    }
  });
});
const lis = [...document.querySelectorAll(".works-list__content li")];
const btns = [...document.querySelectorAll(".works-list__options li")];
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    let btnKey = e.target.dataset.key;
    lis.forEach(li => {
      if (btnKey == li.dataset.key || btnKey == "all") {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  });
});

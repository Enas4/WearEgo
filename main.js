// -------------STATIC HEADER---------------------------------------

$(".header-cancel").click(function () {
  var height = $(".header-static").height();
  if (height == 0) {
    $(".header-static").animate({ height: "30" });
  } else {
    $(".header-static").animate({ height: "0" });
  }
});

// -------------FIXED HEADER----------------------------------

window.addEventListener("scroll", function () {
  let navArea = document.getElementById("navArea");
  if (window.pageYOffset > 0) {
    navArea.classList.add("is-fixed");
  } else {
    navArea.classList.remove("is-fixed");
  }
});

// --------------MENU OPEN---------------------------------

$(".fa-bars").click(function () {
  var width = $("menu").width();
  if (width == 0) {
    $("menu").animate({ width: "250" });
    document.getElementById("cancelIcon").style.display = "inline-block";
    document.getElementById("fa-bars").style.display = "none";
    document.getElementById("main").style.background = "#D0D0D0";
    document.getElementById("main").style.filter = "brightness(90%)";
    document.getElementById("main").style.marginRight = "-250px";
  } else {
    $("menu").animate({ width: "0" });
  }
});

// -------------MENU CLOSE----------------------------------

$(".fa-times-circle,.main").click(function () {
  var width = $("menu").width();
  if (width == 250) {
    $("menu").animate({ width: "0" });
    document.getElementById("main").style.background = "#fff";
    document.getElementById("main").style.filter = "brightness(100%)";
    document.getElementById("fa-bars").style.display = "inline-block";
    document.getElementById("cancelIcon").style.display = "none";
    document.getElementById("main").style.marginRight = "0px";
  }
});

//  ------------------------------------------------

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

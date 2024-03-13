console.log("helooo");
// Start Navbar Action
$(".openNav").click(function () {
  $(".sideNavBar").css("left", "0");
});
$(".close").click(function () {
  $(".sideNavBar").css("left", "-230px");
});
// End Navbar Action

//& Start Singers Action
$(".singers h3").click(function () {
  $(this).next().slideToggle();
  $(".singers p").not($(this).next()).slideUp();
});
//& End Singers Action

//! Start Date Action
window.onload = function () {
  countDownToTime("21 march 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days}`);
  $(".hours").html(`${hours}`);
  $(".mins").html(`${mins}`);
  $(".seconds").html(`${secs}`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
//! End Date Action

//^ Start Contact Action
$(".textareaCount").keyup(function () {
  let textLength = $(this).val().length;
  // console.log(textLength);
  $("#counter").text(100 - textLength <= 0 ? "No" : 100 - textLength);
});
//^ End Contact Action

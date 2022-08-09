$(document).ready(function () {
  $(".owl-stage").owlCarousel();
});

const owlCrew = $(".owl-stage").owlCarousel({
  items: 1,
  dots: true,
  dotsData: true,
  dotsContainer: ".owl-dots",
});

$(".owl-dot").click(function () {
  $(".owl-stage").trigger("to.owl.carousel", [$(this).index(), 300]);
});

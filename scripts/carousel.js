const SLIDES = $(".item");

function nextSlide() {
  let nextNum = SLIDES.index($('.item:not(.hidden)')) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
    console.log('cookie accept button clicked!');
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($('.item:not(.hidden)')) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

const DOTS=$(".dot");
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden")
  currentSlide.removeClass("hidden")
  let currentDot = DOTS.eq(index)
  DOTS.removeClass("active")
  currentDot.addClass("active")
}






$('#left-carousel-control').on('click', function() {
  prevSlide();
  console.log('Left button clicked!');
});

$('#right-carousel-control').on('click', function() {
  nextSlide();
  console.log('Right button clicked!');
});


// Call nextSlide periodically
setInterval(function() {
  nextSlide();
}, 8000);

  /* TODO: snippets to hide SLIDES and then show currentSlide
     Use `SLIDES` or `currentSlide` as the "Access Element Snippet"
     (e.g. `SLIDES.addClass()` or `currentSlide.removeClass()`) */

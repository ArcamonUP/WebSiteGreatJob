let slideIndex = 1;
let slideTimer;

showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  slideIndex = (slideIndex > slides.length) ? 1 : (slideIndex < 1) ? slides.length : slideIndex;

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlides();
  }, 4500);
}
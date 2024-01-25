// The code is inpired from URL: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controls the images in the thumbnail
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("picSlides");
  let circles = document.getElementsByClassName("circles");
  if (n > slides.length) {
    slideIndex = 1
    }
  if (n < 1) {
    slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  circles[slideIndex-1].className += " active";
 
} 

showNewSlides();

function showNewSlides() {
  let i;
  let slides = document.getElementsByClassName("picSlides");
  let circles = document.getElementsByClassName("circles");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
    }

  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  circles[slideIndex-1].className += " active";
  myTimeout = setTimeout(showNewSlides, 10000);
    
}

function stopTime() {
  clearTimeout(myTimeout);
  myTimeout = setTimeout(showNewSlides, 10000);
}

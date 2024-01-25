//Got a lot of this functionality from URL:https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 
//I do however not know who the author is.

window.onscroll = function() {scrolled()};

const navbar = document.getElementById("navBar");
const header = navbar.offsetTop;

//Checks if the window has reached end of header, when the pageYoffset is larger than
//header, add classlist on all navbar elements which will alter the navbar css.
//The alteration makes the navbar position changed to fixed, so that it will follow when scrolling down the page.
function scrolled() {
  if (window.pageYOffset  >= header) {
    navbar.classList.add("setFixed");   //Adds under new class with different css
  } else {
    navbar.classList.remove("setFixed");  //Adds under new class with different css
  }
}
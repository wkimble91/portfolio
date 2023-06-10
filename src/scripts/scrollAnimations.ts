// Reveal Animations
function revealRight() {
  var reveals = document.querySelectorAll('.revealRight');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
    if (elementTop > windowHeight) {
      reveals[i].classList.remove('active');
    }
  }
}
function revealLeft() {
  var reveals = document.querySelectorAll('.revealLeft');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
    if (elementTop > windowHeight) {
      reveals[i].classList.remove('active');
    }
  }
}
function revealFade() {
  var reveals = document.querySelectorAll('.revealFade');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
    if (elementTop > windowHeight) {
      reveals[i].classList.remove('active');
    }
  }
}

// Initial loading depending on screen location
revealRight();
revealLeft();
revealFade();

// Add event listeners for scrolling
window.addEventListener('scroll', revealRight);
window.addEventListener('scroll', revealLeft);
window.addEventListener('scroll', revealFade);

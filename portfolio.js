var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('bubbly-button');

  e.target.classList.add('bubbly-button');
  setTimeout(function () {
    e.target.classList.remove('bubbly-button');
  }, 700);
  console.log("Hello");
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('mouseover', animateButton, false);
}

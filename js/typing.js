let element = document.querySelector('.header__typewriter h1');
var i = 1;

function addReturn() {
  element.classList.add('return');
}

function removeReturn() {
  element.classList.remove('return');
  if (i % 4 === 1) {
    element.innerHTML = "I am a passionate Web Developer.";
    i++;
  }
  else if (i % 4 === 2){
    element.innerHTML = "Currently working at OneDirect.";
    i++;
  }
  else if (i % 4 === 3){
    element.innerHTML = "Scroll down to know more.";
    i++;
  }
  else {
    element.innerHTML = "Hi! My name is Sangeet Sagar.";
    i++;
  }
}

setInterval(addReturn, 3500);
setInterval(removeReturn, 7000);
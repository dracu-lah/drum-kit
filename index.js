let drums = document.querySelectorAll(".drum");

function keyCheck(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:null
      break;
  }
}

// button click
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let buttonNames = this.innerHTML;
    keyCheck(buttonNames);
  });
}

// key press
document.addEventListener("keydown", function (event) {
  keyCheck(event.key);
});

let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++)
  drums[i].addEventListener("click", function () {
    keyCheck(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
document.addEventListener("keydown", function (e) {
  keyCheck(e.key);
  buttonAnimation(e.key);
});

function keyCheck(e) {
  switch (e) {
    case "a":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "s":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "d":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "f":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("./sounds/tom-4.mp3").play();
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

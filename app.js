const circleRadius = document.querySelector(".circle");
const circleText = document.querySelector(".text");

let breatheTime = 7500;
let breatheIn = (breatheTime / 5) * 2;
let holdTime = breatheTime / 5;

function startBreathe() {
  circleText.innerHTML = "breathe in!";
  circleRadius.style.transform = "scale(1.2)";
  circleRadius.style.transition = "all 3.5s ease-in-out";

  setTimeout(() => {
    circleText.innerHTML = "hold!";

    setTimeout(() => {
      circleText.innerHTML = "breathe out!";
      circleRadius.style.transform = "scale(1)";
      circleRadius.style.transition = "all 3.5s ease-in-out";
    }, holdTime);
  }, breatheIn);
}

setInterval(startBreathe, breatheTime);

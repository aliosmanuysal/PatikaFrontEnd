document.addEventListener("DOMContentLoaded", function () {
    // Get the button elements
    const buttonA = document.querySelector(".button-a");
  
    const buttonS = document.querySelector(".button-s");
  
    const buttonD = document.querySelector(".button-d");
  
    const buttonF = document.querySelector(".button-f");
  
    const buttonG = document.querySelector(".button-g");
  
    const buttonH = document.querySelector(".button-h");
  
    const buttonJ = document.querySelector(".button-j");
  
    const buttonK = document.querySelector(".button-k");
  
    const buttonL = document.querySelector(".button-l");
  
    // Create audio objects
    const soundA = new Audio("./assets/sounds/boom.wav");
  
    const soundS = new Audio("./assets/sounds/clap.wav");
  
    const soundD = new Audio("./assets/sounds/hihat.wav");
  
    const soundF = new Audio("./assets/sounds/kick.wav");
  
    const soundG = new Audio("./assets/sounds/openhat.wav");
  
    const soundH = new Audio("./assets/sounds/ride.wav");
  
    const soundJ = new Audio("./assets/sounds/snare.wav");
  
    const soundK = new Audio("./assets/sounds/tink.wav");
  
    const soundL = new Audio("./assets/sounds/tom.wav");
  
    //event listeners for mouse clicks
    buttonA.addEventListener("click", function () {
      soundA.play();
    });
  
    buttonS.addEventListener("click", function () {
      soundS.play();
    });
  
    buttonD.addEventListener("click", function () {
      soundD.play();
    });
  
    buttonF.addEventListener("click", function () {
      soundF.play();
    });
  
    buttonG.addEventListener("click", function () {
      soundG.play();
    });
  
    buttonH.addEventListener("click", function () {
      soundH.play();
    });
  
    buttonJ.addEventListener("click", function () {
      soundJ.play();
    });
  
    buttonK.addEventListener("click", function () {
      soundK.play();
    });
  
    buttonL.addEventListener("click", function () {
      soundL.play();
    });
  
    //event listeners for keyboard inputs
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "a" || event.key === "A") {
        soundA.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "s" || event.key === "S") {
        soundS.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "d" || event.key === "D") {
        soundD.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "f" || event.key === "F") {
        soundF.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "g" || event.key === "G") {
        soundG.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "h" || event.key === "H") {
        soundH.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "j" || event.key === "J") {
        soundJ.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "k" || event.key === "K") {
        soundK.play();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "l" || event.key === "L") {
        soundL.play();
      }
    });
  
    // event listeners to create button animations
    document.addEventListener("keydown", function (event) {
      if (event.key === "a" || event.key === "A") {
        buttonA.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "a" || event.key === "A") {
        buttonA.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "s" || event.key === "S") {
        buttonS.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "s" || event.key === "S") {
        buttonS.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "d" || event.key === "D") {
        buttonD.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "d" || event.key === "D") {
        buttonD.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "f" || event.key === "F") {
        buttonF.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "f" || event.key === "F") {
        buttonF.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "g" || event.key === "G") {
        buttonG.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "g" || event.key === "G") {
        buttonG.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "h" || event.key === "H") {
        buttonH.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "h" || event.key === "H") {
        buttonH.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "j" || event.key === "J") {
        buttonJ.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "j" || event.key === "J") {
        buttonJ.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "k" || event.key === "K") {
        buttonK.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "k" || event.key === "K") {
        buttonK.classList.remove("scaled");
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "l" || event.key === "L") {
        buttonL.classList.add("scaled");
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.key === "l" || event.key === "L") {
        buttonL.classList.remove("scaled");
      }
    });
  });
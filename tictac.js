var firstBox = document.querySelector(".box1");
var secondBox = document.querySelector(".box2");
var thirdBox = document.querySelector(".box3");
var fourthBox = document.querySelector(".box4");
var fifthBox = document.querySelector(".box5");
var sixthBox = document.querySelector(".box6");
var seventhBox = document.querySelector(".box7");
var eighthBox = document.querySelector(".box8");
var ninthBox = document.querySelector(".box9");

function makeBoxX(event) {
  var boxX = event.target;
  boxX.innerText = "X";
}
var allBoxes = document.querySelector(".allBoxes");
allBoxes.addEventListener("click", makeBoxX);

function makeBoxO(event) {
  var boxX = event.target;
  boxX.innerText = "O";
}
var allBoxes = document.querySelector(".allBoxes");
allBoxes.addEventListener("click", makeBoxX);

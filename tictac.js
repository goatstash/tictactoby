var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");
var box9 = document.querySelector(".box9");

var activePlayer;
var playerOne = "X";
var playerTwo = "O";
activePlayer = playerOne;
var playeronewins = false;
var playertwowins = false;
var drawWins;
var form = document.querySelector("form");

var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneScoreboard = document.querySelector(".playerOneScore");
var playerTwoScoreboard = document.querySelector(".playerTwoScore");

var winner = document.querySelector(".winner");

var boxes = document.querySelector(".allboxes");
var resetButtonClick = document.querySelector(".reset");

let playSound = () => new Audio("./WOW HEAVEN.wav").play();

//Reset Game
function resetGame() {
  box1.textContent = "";
  box2.textContent = "";
  box3.textContent = "";
  box4.textContent = "";
  box5.textContent = "";
  box6.textContent = "";
  box7.textContent = "";
  box8.textContent = "";
  box9.textContent = "";
  playerOne = "X";
  playerTwo = "O";
  winner.textContent = "";
}
//Toggle Players
function clickBoxPlayer(event) {
  if (activePlayer === playerOne) {
    var boxClicked = event.target;

    if (
      boxClicked.textContent === playerOne ||
      boxClicked.textContent === playerTwo
    ) {
      console.log("noturturn");
    } else if (boxClicked.textContent === "") {
      boxClicked.textContent = activePlayer;
      activePlayer = playerTwo;

      console.log("one");
    }
    //Player One winning combinations
    function playerOneWin() {
      if (
        (box1.textContent === playerOne) & (box2.textContent === playerOne) &&
        box3.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box1.textContent === playerOne &&
        box4.textContent === playerOne &&
        box7.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;

        console.log("Player One Wins!");
      } else if (
        box1.textContent === playerOne &&
        box5.textContent === playerOne &&
        box9.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box2.textContent === playerOne &&
        box5.textContent === playerOne &&
        box8.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box3.textContent === playerOne &&
        box6.textContent === playerOne &&
        box9.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box3.textContent === playerOne &&
        box5.textContent === playerOne &&
        box7.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box4.textContent === playerOne &&
        box5.textContent === playerOne &&
        box6.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      } else if (
        box7.textContent === playerOne &&
        box8.textContent === playerOne &&
        box9.textContent === playerOne
      ) {
        playeronewins = true;
        playertwowins = false;
        winner.textContent = "Player One Wins";
        playerOneScoreboard.textContent = playerOneScore += 1;
        console.log("Player One Wins!");
      }
    }
    //Turn Toggle continued..
    playerOneWin();
  } else if (activePlayer === playerTwo) {
    var boxClicked = event.target;

    if (
      boxClicked.textContent === playerOne ||
      boxClicked.textContent === playerTwo
    ) {
      console.log("noturturn");
    } else if (boxClicked.textContent === "") {
      boxClicked.textContent = activePlayer;
      activePlayer = playerOne;
    }

    console.log("two");
  }
  //player two winning combinations
  function playerTwoWin() {
    if (
      box1.textContent === playerTwo &&
      box2.textContent === playerTwo &&
      box3.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box1.textContent === playerTwo &&
      box4.textContent === playerTwo &&
      box7.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box1.textContent === playerTwo &&
      box5.textContent === playerTwo &&
      box9.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box2.textContent === playerTwo &&
      box5.textContent === playerTwo &&
      box8.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box3.textContent === playerTwo &&
      box6.textContent === playerTwo &&
      box9.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box3.textContent === playerTwo &&
      box5.textContent === playerTwo &&
      box7.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box4.textContent === playerTwo &&
      box5.textContent === playerTwo &&
      box6.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    } else if (
      box7.textContent === playerTwo &&
      box8.textContent === playerTwo &&
      box9.textContent === playerTwo
    ) {
      playertwowins = true;
      playeronewins = false;
      winner.textContent = "Player Two Wins";
      playerTwoScoreboard.textContent = playerTwoScore += 1;
      console.log("Player Two Wins!");
    }
  }
  //Draw Function
  playerTwoWin();
  function draw() {
    if (
      box1.textContent !== "" &&
      box2.textContent !== "" &&
      box3.textContent !== "" &&
      box4.textContent !== "" &&
      box5.textContent !== "" &&
      box6.textContent !== "" &&
      box7.textContent !== "" &&
      box8.textContent !== "" &&
      box9.textContent !== "" &&
      playeronewins == false &&
      playertwowins == false
    ) {
      winner.textContent = "It's a Draw!";
      drawWins = true;
      console.log("draw");
    }
  }
  draw();

  //Wipes Board if someone wins
  function wipeBoard() {
    if (playeronewins === true || playertwowins === true) {
      console.log("ithappened");
      box1.textContent = "";
      box2.textContent = "";
      box3.textContent = "";
      box4.textContent = "";
      box5.textContent = "";
      box6.textContent = "";
      box7.textContent = "";
      box8.textContent = "";
      box9.textContent = "";
      playeronewins = false;
      playertwowins = false;
    }
  }
  wipeBoard();
}
var allBoxes = document.querySelector(".allBoxes");
allBoxes.addEventListener("click", clickBoxPlayer);

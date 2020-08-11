let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 7);
  console.log(randomNumber);
  //player turn
  if (player1Turn) {
    player1Scoreboard.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
  } else {
    player2Scoreboard.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
  }

  // switch player
  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
});

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
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  }

  // switch player
  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }

  resetBtn.addEventListener("click", function () {
    message.textContent = "Player 1 turn";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
  });
});

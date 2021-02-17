// 3minutes on video 133

let p1Button = document.querySelector("#p1");
let p1Score = 0;
let p1Display = document.querySelector("#p1Display");

let p2Button = document.getElementById("p2");
let p2Display = document.querySelector("#p2Display");
let p2Score = 0;

let gameOver = false; //if sum1 gets to 5, then gameOver will be true.
let winningScore = 5;

let resetButton = document.getElementById("reset");

let numberInput = document.querySelector("input");
let p = document.querySelector("p");

let winningScoreDisplay = document.querySelector("p span");

console.log(p1Display);
p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

numberInput.addEventListener("change", function() {
  //Change event will run anything a change happens.
  winningScoreDisplay.textContent = numberInput.value;
  winningScore = Number(numberInput.value);
  reset();
});

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}

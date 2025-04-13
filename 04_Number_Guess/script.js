let number = parseInt(Math.random() * 100 + 1);
const guessInput = document.querySelector("#guessInput");
const submit = document.querySelector("#guess-submit");
const PrevGuess = document.querySelector(".prevGuess");
const attemptRem = document.querySelector(".attempts");
const resultMessage = document.querySelector("#resultText");
const startOver = document.querySelector("#resultContainer");

const p = document.createElement("button");

let guessArray = [];
let playGame = true;

let guessCount = 1;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please enter number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    guessArray.push(guess);
    if (guessCount === 10) {
      displayGuess(guess);
      displayMessage(`Game Over!! Number was ${number}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < number) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > number) {
    displayMessage(`Number is TOO High`);
  } else {
    displayMessage(`You guessed it Right. You Won !!`);
    endgame()
  }
}
function displayGuess(guess) {
  guessInput.value = "";
  PrevGuess.innerHTML += `${guess} `;
  guessCount++;
  attemptRem.innerHTML = `${11 - guessCount}`;
}
function displayMessage(message) {
  resultMessage.innerHTML = `${message}`;
}
function endgame() {
  guessInput.value = "";
  guessInput.setAttribute("disabled", "");
  p.id = "newGameBtn";
  p.innerHTML = `Play Again`;
  startOver.appendChild(p);
  playGame = false;
  newgame();
}
function newgame() {
  const playAgain = document.querySelector("#newGameBtn");
  playAgain.addEventListener("click", function (e) {
    number = parseInt(Math.random() * 100 + 1);
    guessArray = [];
    guessCount = 1;
    PrevGuess.innerHTML = "";
    resultMessage.innerHTML = "";
    attemptRem.innerHTML = `${11 - guessCount}`;
    guessInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

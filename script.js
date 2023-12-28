const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultContainer = document.querySelector('#resultContainer');
const playerScoreContainer = document.querySelector('#playerScoreContainer');
const computerScoreContainer = document.querySelector('#computerScoreContainer');


rockBtn.addEventListener('click', () => {
  playerSelection = 'Rock';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
  playerSelection = 'Paper';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
  playerSelection = 'Scissors';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});


function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      // this one handles unexpected cases, but it shouldn't happen in this function
      return "Rock";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let resultText = "It's a Tie!";
    showResults(resultText);
  }
  else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore ++;
        let resultText = "You win! " + playerSelection + " beats " + computerSelection
        showResults(resultText);
    }
  else {
    computerScore ++;
    let resultText = "You lose! " + computerSelection + " beats " + playerSelection
    showResults(resultText);
  }
}

function showResults(resultText) {
  resultContainer.textContent = resultText;
  playerScoreContainer.textContent = 'Player Score: ' + playerScore;
  computerScoreContainer.textContent = 'ComputerScore: ' + computerScore;
  if ( playerScore === 3) {
    alert("Game over! You win!");
  }
  else if (computerScore === 3) {
    alert("Game over! You lose!");
  }
}
let playerScore = 0;
let computerScore = 0;

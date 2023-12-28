const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

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
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    return alert("It's a tie!");
  }
  else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore ++;
        return alert("You win! " + playerSelection + " beats " + computerSelection);
    }
  else {
    computerScore ++;
    return alert("You lose! " + computerSelection + " beats " + playerSelection);
  }
}

// function game() {
//   while(playerScore <= 3 && computerScore <= 3) {

//     if (playerScore === 3) {
//       return alert("Game over! You win!");
//     }
//     else if (computerScore === 3) {
//       return alert ("Game over! You lose!");
//     }

//     const playerSelection = prompt("Rock Paper or Scissors?");
//     const computerSelection = getComputerChoice();
//     alert("Computer picked " + computerSelection);

//     playRound(playerSelection, computerSelection);

//   }
// }

let playerScore = 0;
let computerScore = 0;
// game();
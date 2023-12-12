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
  const playerSelectionCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  if (playerSelectionCap === computerSelection) {
    return alert("It's a tie!");
  }
  else if (
      (playerSelectionCap === "Rock" && computerSelection === "Scissors") ||
      (playerSelectionCap === "Paper" && computerSelection === "Rock") ||
      (playerSelectionCap === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore ++;
        return alert("You win! " + playerSelectionCap + " beats " + computerSelection);
    }
  else {
    computerScore ++;
    return alert("You lose! " + computerSelection + " beats " + playerSelectionCap);
  }
}

function game() {
  while(playerScore <= 3 && computerScore <= 3) {

    if (playerScore === 3) {
      return alert("Game over! You win!");
    }
    else if (computerScore === 3) {
      return alert ("Game over! You lose!");
    }

    const playerSelection = prompt("Rock Paper or Scissors?");
    const computerSelection = getComputerChoice();
    alert("Computer picked " + computerSelection);

    playRound(playerSelection, computerSelection);

  }
}

let playerScore = 0;
let computerScore = 0;
game();
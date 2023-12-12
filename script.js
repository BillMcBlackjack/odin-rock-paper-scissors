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
  if (playerSelectionCap === computerSelection) {
    return alert("It's a tie!");
  }
  else if (
      (playerSelectionCap === "Rock" && computerSelection === "Scissors") ||
      (playerSelectionCap === "Paper" && computerSelection === "Rock") ||
      (playerSelectionCap === "Scissors" && computerSelection === "Paper")
    ) {
        return alert("You win! " + playerSelectionCap + " beats " + computerSelection);
    }
  else {
    return alert("You lose! " + computerSelection + " beats " + playerSelectionCap);
  }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock Paper or Scissors?");
const playerSelectionCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

alert("Computer picked " + getComputerChoice());
playRound(playerSelectionCap, getComputerChoice());
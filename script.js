function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      // this one handles unexpected cases, but it shouldn't happen in this function
      return "rock";
  }
}


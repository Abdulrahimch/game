console.log ("Enter your choice (0 = Rock // 1 = Paper // 2 = Scissors");

const allChoices = {
  0: 'rock',
  1: 'paper',
  2: 'scissors'
};

const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * choices.length);
  return allChoices[random];
}

const playerChoice = () => {
  const choice = prompt("Enter your choice (0 = Rock // 1 = Paper // 2 = Scissors):");

  if (typeof(choice) !== 'number' ||  (0 <= playerChoice < 2)) {
    console.log("Invalid choice. Please enter a number between 0 and 2.");
    return;
  }

  return allChoices[choice];
};


module.exports = { playerChoice, computerChoice } ;





console.log ("Enter your choice (0 = Rock // 1 = Paper // 2 = Scissors");

function playJokenpo(playerChoice) {
  
  let result;
  let playerScore = 0;
  let computerScore = 0;
  
  for (let round = 0; round < 5; round++) {
    const computerChoice = Math.floor(Math.random() * 3);
    playerChoice = Number(prompt("Enter your choice (0 for Rock, 1 for Paper, 2 for Scissors):"));
    if (playerChoice < 0 || playerChoice > 2) {
      console.log("Invalid choice. Please enter a number between 0 and 2.");
      return;
    }
      
    if (playerChoice === computerChoice) {
      result = "Tie!";
    } 
    else if (playerChoice === 0 && computerChoice === 2) {
      result = "You win this round! Rock beats Scissors.";
      playerScore++;
    } 
    else if (playerChoice === 1 && computerChoice === 0) {
      result = "You win this round! Paper beats Rock.";
      playerScore++;
    } 
    else if (playerChoice === 2 && computerChoice === 1) {
      result = "You win this round! Scissors beats Paper.";
      playerScore++;
    } 
    else {
      result = "You lose this round. Try again.";
      computerScore++;
    }
    
    console.log(`Round ${round + 1}:`);
    console.log(`Your choice: ${playerChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    console.log(result);
    console.log();
  }
  
  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} to ${computerScore}.`);
  } 
  else if (playerScore < computerScore) {
    console.log(`You lose the game. Final score: ${playerScore} to ${computerScore}.`);
  } 
  else {
    console.log(`It's a tie! Final score: ${playerScore} to ${computerScore}.`);
  }
}

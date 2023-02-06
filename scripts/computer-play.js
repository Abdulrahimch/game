const options = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}
  const playerChoice = prompt('Choose rock, paper, or scissors:');
console.log(playRound(playerChoice));

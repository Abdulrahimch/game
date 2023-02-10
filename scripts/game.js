const playRound = require('./play-round');
const { playerChoice, computerChoice } = require('./computer-play');

const game = () => {
    let playerScore = 0,
        computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = playerChoice(),
              computerSelection = computerChoice();
        playerScore += playRound(playerSelection, computerSelection).playerCounter;
        computerScore += playRound(playerSelection, computerSelection).computerCounter;
        console.log(playRound(playerSelection, computerSelection).response);
    };

    if (playerScore > computerScore) 
        console.log(`Congrates  you Wone!!!! your Score: ${playerScore} Computer Score: ${computerScore}`);
    else if (playerScore < computerScore)
        console.log(`Game over  Try again later, your Score: ${playerScore} Computer Score: ${computerScore}`);
    else console.log(`None won, Try one more time , your Score: ${playerScore} Computer Score: ${computerScore}`);
}

game();
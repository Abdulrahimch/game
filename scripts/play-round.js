const playRound = (playerSelection, computerSelection) => {
    const winner = {}
    winner[playerSelection] = { 
        playerCounter: 1, 
        computerCounter: 0, 
        response: `You wone, ${playerSelection} beats ${computerSelection}` 
    };
    winner[computerSelection] = { 
        playerCounter: 0, 
        computerCounter: 1, 
        response: `You lose, ${computerSelection} beats ${playerSelection}` 
    };
    
    const playedGame = playerSelection+computerSelection

    switch(playedGame) {
        case 'rockpaper': 
        case 'paperrock':
            return winner['paper']
        
        case 'rockscissors':
        case 'scissorsrock':
            return winner['rock']
            
        case 'paperscissors':
        case 'scissorspaper':
            return winner['scissors'];
            
        default:
            return { playerCounter: 0, computerCounter: 0, response: `Repeat again!` }
            
    }
};

module.exports = playRound;

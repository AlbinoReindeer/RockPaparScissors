const values = ["Rock","Paper","Scissors"];


function playRound(playerSelection, computerSelection) {
    
    
    computerSelection = computerSelection.toLowerCase();
    

    if (playerSelection === null || playerSelection === ''){
        return('Invalid input!');
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return('You win!');
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return('You lose!');
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return('Draw!');
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return('You lose!');
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return('You win!');
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return('Draw!');
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return('You win!');
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return('You lose!');
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return('Draw!');
    } 

};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i < 5; i++){

        function computerPlay(){
            const valueToUse = Math.floor(Math.random() * values.length);
            return values[valueToUse];
        };
        
        let computerSelection = computerPlay(values);



        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let round = playRound(playerSelection, computerSelection);
        if (round === 'You win!'){
            playerScore++;
            console.log('You won the round')
        } else if (round === 'You lose!') {
            computerScore++;
            console.log('You lost the round')
        } else if (round === 'Draw!') {
            console.log('Draw!')
        }
    }
    if (playerScore > computerScore){
        console.log('You won the game!')
    } else {
        console.log('You lost the game!')
    }
};


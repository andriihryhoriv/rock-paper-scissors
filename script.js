const choice = ['Rock', 'Paper', 'Scissors'];
let win = 0;
let lose = 0;

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let message = "";
    if ((player === 'rock' && computer === 'scissors') 
      || (player === 'paper' && computer === 'rock') 
      || (player === 'scissors' && computer === 'paper')) {
        win++;        
        message = `You WIN! ${player} beats ${computer}`;
    } else if ((player === 'rock' && computer === 'paper') 
      || (player === 'paper' && computer === 'scissors') 
      || (player === 'scissors' && computer === 'rock')) {
        lose++;        
        message = `You Lose! ${computer} beats ${player}`;
    } else if (player == computer) {
        message = "It's a tie!";
    } else {
        message = `${player} is invalid value!`;
    }
    return `${message}\n${win} : ${lose}`;
}

function game() {
    for (let i = 1; i <= 5; i++){
        const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
        const computerSelection = choice[Math.floor(Math.random() * choice.length)];
        console.log(`Round ${i}:`);
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));  
    }
    if (win > lose) {
        console.log("You WIN the game!");
    } else if (win == lose){
        console.log("It's a tie");
    } else {
        console.log("You lose the game :(");
    }
}

(game());
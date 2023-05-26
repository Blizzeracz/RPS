const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";


function getComputerChoice() {
    const num = Math.floor(Math.random() * 100) % 3;
    if (num === 0) {
        return rock;
    } else if (num === 1) {
        return paper;
    } else {
        return scissors;
    }

}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase().slice(0,1) + playerSelection.toLowerCase().slice(1);
    if (playerSelection === computerSelection) {
        return "It's a tie!!!";
    } else if (playerSelection === rock && computerSelection === paper
             || playerSelection === paper && computerSelection === scissors
             || playerSelection === scissors && computerSelection === rock) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;   
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }


}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const round = playRound(window.prompt("Rock, Paper or Scissors?"), getComputerChoice());
        console.log(round);
        if (round.charAt(4) === "W") {
            playerScore++;
            console.log("Player Score: " + playerScore);
            
        } else if (round.charAt(4) === "L") {
            computerScore++;
            console.log("Computer Score: " + computerScore);
        } 

    } 

    if (playerScore > computerScore) {
        playerScore = 0;
        computerScore = 0;
        return "You won the game!";
    } else if (playerScore < computerScore) {
        playerScore = 0;
        computerScore = 0;
        return "You lost the game...";
    } else {
        playerScore = 0;
        computerScore = 0;
        return "WHAT A TIE?!";
    }

    
}





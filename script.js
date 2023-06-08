const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", 
                                                () => playRound(button.value)));





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



function updateChoice(player, computer) {
    const computerChoice = document.querySelector("#computer #choice");
    const playerChoice = document.querySelector("#player #choice");
    switch (computer) {
        case rock:
            computerChoice.textContent = "🪨";
            switch (player) {
                case rock:
                    playerChoice.textContent = "🪨";
                    return;
                case paper:
                    playerChoice.textContent = "📝";
                    return;
                case scissors:
                    playerChoice.textContent = "✂️";
                    return;
            }
           
            
        case paper:
            computerChoice.textContent = "📝";
            switch (player) {
                case rock:
                    playerChoice.textContent = "🪨";
                    return;
                case paper:
                    playerChoice.textContent = "📝";
                    return;
                case scissors:
                    playerChoice.textContent = "✂️";
                    return;
            }
           
            
        case scissors:
            computerChoice.textContent = "✂️";
            switch (player) {
                case rock:
                    playerChoice.textContent = "🪨";
                    return;
                case paper:
                    playerChoice.textContent = "📝";
                    return;
                case scissors:
                    playerChoice.textContent = "✂️";
                    return;
            }      
    }
 }



function updateScore() {
    const playerText = document.querySelector('#player #text');
    const computerText = document.querySelector('#computer #text');
    playerText.textContent = "Points: " + playerScore;
    computerText.textContent = "Points: " + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        restartRound();
    }
}
const center = document.querySelector('#center');
function restartRound() {
    buttons.forEach(button => button.disabled = true);

    
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again";
    playAgain.setAttribute('id', 'playAgain');
    center.appendChild(playAgain);
    again = document.querySelector('#playAgain');
    again.addEventListener("click", () => {
        center.removeChild(playAgain);
        buttons.forEach(button => button.disabled = false);
        updateScore();
        document.querySelector("#results").textContent = '';
        
    })

}





function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    //Only if play inputs their own text
    playerSelection = playerSelection.toUpperCase().slice(0,1) + 
                      playerSelection.toLowerCase().slice(1);

    updateChoice(playerSelection, computerSelection);

    let results = "";
    
    if (playerSelection === computerSelection) {
        results = "It's a tie!!!";

    } else if (playerSelection === rock && computerSelection === paper
             || playerSelection === paper && computerSelection === scissors
             || playerSelection === scissors && computerSelection === rock) {
        computerScore++;
        results = "You Lose! " + computerSelection + " beats " + playerSelection;
        
    } else {
        playerScore++;
        results = "You Win! " + playerSelection + " beats " + computerSelection;
    }

 

    if (playerScore === 5) {
        results = "You won the game!";
    } else if (computerScore === 5) {
        results = "You lost the game...";
    } 
    
    updateScore();
    document.querySelector("#results").textContent = results;



}



const choices = ["rock", "papers", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let computerScore = 0;
let playerScore = 0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
        result = "IT'S A TIE!"
    }
    else {
        switch(playerChoice){
            case "rock":
             result = (computerChoice==="scissors") ? "You Win!" : "You Lose!";
             break;
             case "papers":
             result = (computerChoice==="rock") ? "You Win!" : "You Lose!";
             break;
             case "scissors":
             result = (computerChoice==="papers") ? "You Win!" : "You Lose!";
             break;
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){

        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }
}
/*buttons/ selectors*/

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");


/*function to get random guess from the computer*/

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber <= 1) {
        return "rock";
    } else if (randomNumber <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*logic to get the human choice*/

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        return "You did not choose one of the three options";
    }
}

/*play game function*/ 



let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        const p = document.createElement('p');
        p.innerText = "You lose, paper beats rock";
        outcome.appendChild(p);
        computerScore++
     } else if (humanChoice === "paper" && computerChoice === "rock") {
        const p = document.createElement('p');
        p.innerText = "You win, paper beats rock";
        outcome.appendChild(p);
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        const p = document.createElement('p');
        p.innerText = "You win, scissors beat paper";
        outcome.appendChild(p);
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        const p = document.createElement('p');
        p.innerText = "You lose, scissors beat paper";
        outcome.appendChild(p);
        computerScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        const p = document.createElement('p');
        p.innerText = "You win, rock beats scissors";
        outcome.appendChild(p);
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        const p = document.createElement('p');
        p.innerText = "You lose, rock beats scissors";
        outcome.appendChild(p);
        computerScore++
    } else {
        const p = document.createElement('p');
        p.innerText = "This round is a draw";
        outcome.appendChild(p);
    }
    
}

/* Event listeners for buttons*/

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock';
    playRound(humanSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection);
})


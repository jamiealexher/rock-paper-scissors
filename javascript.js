
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

function playGame () {

    let computerScore = 0;
    let humanScore = 0;

    function playRound (humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose, paper beats rock")
            computerScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win, paper beats rock")
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win, scissors beat paper")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose, scissors beat paper")
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win, rock beats scissors")
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose, rock beats scissors")
            computerScore++
        } else {
            console.log("This round is a draw")
        }
    
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`You win with a score of ${humanScore}. The computer scored ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lost with a score of ${humanScore}. The computer scored ${computerScore}`)
    } else {
        console.log(`This game was a draw with you scoring ${humanScore} and the computer scoring ${computerScore}`)
    }
}


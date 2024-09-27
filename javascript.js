
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
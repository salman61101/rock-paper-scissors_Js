function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    if (!choice) return "";
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Invalid input!");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("\nGame Over");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
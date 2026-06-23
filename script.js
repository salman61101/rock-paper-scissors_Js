function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const scoreDiv = document.querySelector("#score");
const resultDiv = document.querySelector("#result");

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultDiv.textContent =
            `Tie! Both chose ${humanChoice}`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

        resultDiv.textContent =
            `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;

        resultDiv.textContent =
            `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent =
        `Player: ${humanScore} | Computer: ${computerScore}`;
}

function playGame(humanChoice) {

    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {

        resultDiv.textContent =
            "🎉 Congratulations! You won the game!";

        disableButtons();
    }

    if (computerScore === 5) {

        resultDiv.textContent =
            "💀 Computer won the game!";

        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
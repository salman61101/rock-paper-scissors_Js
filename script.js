Math.floor(Math.random() * 3);

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }

    if (randomNumber === 1) {
        return "paper";
    }

    return "scissors";
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

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
        console.log(
            `You win! ${humanChoice} beats ${computerChoice}`
        );
    } else {
        computerScore++;
        console.log(
            `You lose! ${computerChoice} beats ${humanChoice}`
        );
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(
    humanSelection,
    computerSelection
);

console.log(humanScore);
console.log(computerScore);




function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        console.log(`Round ${i}`);

        const humanChoice =
            getHumanChoice();

        const computerChoice =
            getComputerChoice();

        playRound(
            humanChoice,
            computerChoice
        );
    }

    console.log("Game Over");

    console.log(
        `Human: ${humanScore}`
    );

    console.log(
        `Computer: ${computerScore}`
    );

    if (humanScore > computerScore) {
        console.log(
            "You won the game!"
        );
    } else if (
        computerScore > humanScore
    ) {
        console.log(
            "Computer won the game!"
        );
    } else {
        console.log(
            "The game is a tie!"
        );
    }
}




playGame();
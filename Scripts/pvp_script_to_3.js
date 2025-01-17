let rockInput = document.getElementById('rock');
let paperInput = document.getElementById('paper');
let scissorsInput = document.getElementById('scissors');
let lizardInput = document.getElementById('lizard');
let spockInput = document.getElementById('spock');

let Player1Score = 0;
let Player2Score = 0;
let Player1ScoreText = document.getElementById('player1-score');
let Player2ScoreText = document.getElementById('player2-score');

let player1Choice = null;
let player2Choice = null;

function handleInput(choice) {
    if (!player1Choice) {
        player1Choice = choice;
        console.log(`Player 1 chose ${choice}`);
        alert('Player 2, make your choice!');
    } else if (!player2Choice) {
        player2Choice = choice;
        console.log(`Player 2 chose ${choice}`);
        gameCheck();
    }
}

function gameCheck() {
    if (player1Choice === player2Choice) {
        alert('Tie!');
        resetChoices();
        return;// to stop the function from executing further
    }

    switch (player1Choice) {
        case "scissors":
            if (player2Choice === "paper" || player2Choice === "lizard") {
                alert(`Player 1 wins! Scissors beats ${player2Choice}.`);
                Player1Score++;

            } else {
                alert(`Player 2 wins! ${player2Choice} beats Scissors.`);
                Player2Score++;
            }
            break;

        case "rock":
            if (player2Choice === "lizard" || player2Choice === "scissors") {
                alert(`Player 1 wins! Rock beats ${player2Choice}.`);
                Player1Score++;
            } else {
                alert(`Player 2 wins! ${player2Choice} beats Rock.`);
                Player2Score++;
            }
            break;

        case "paper":
            if (player2Choice === "rock" || player2Choice === "spock") {
                alert(`Player 1 wins! Paper beats ${player2Choice}.`);
                Player1Score++;
            } else {
                alert(`Player 2 wins! ${player2Choice} beats Paper.`);
                Player2Score++;
            }
            break;

        case "lizard":
            if (player2Choice === "spock" || player2Choice === "paper") {
                alert(`Player 1 wins! Lizard beats ${player2Choice}.`);
                Player1Score++;
            } else {
                alert(`Player 2 wins! ${player2Choice} beats Lizard.`);
                Player2Score++;
            }
            break;

        case "spock":
            if (player2Choice === "scissors" || player2Choice === "rock") {
                alert(`Player 1 wins! Spock beats ${player2Choice}.`);
                Player1Score++;
            } else {
                alert(`Player 2 wins! ${player2Choice} beats Spock.`);
                Player2Score++;
            }
            break;

        default:
            alert("Invalid input! Please choose scissors, rock, paper, lizard, or spock.");
    }
    
    Player1ScoreText.textContent = Player1Score;
    Player2ScoreText.textContent = Player2Score;

    displayScores();
    resetChoices();
}

function resetScores() {
    Player1Score = 0;
    Player2Score = 0;
}

function resetGame() {
    resetScores();
    resetChoices();
}

function displayScores() {
    if (Player1Score === 3) {
        resetGame();
        alert('Player 1 wins the game! Tap OK to play again.');
    } else if (Player2Score === 3) {
        resetGame();
        alert('Player 2 wins the game! Tap OK to play again.');
    }
}

function resetChoices() {
    player1Choice = null;
    player2Choice = null;
}

rockInput.addEventListener('click', () => handleInput('rock'));
paperInput.addEventListener('click', () => handleInput('paper'));
scissorsInput.addEventListener('click', () => handleInput('scissors'));
lizardInput.addEventListener('click', () => handleInput('lizard'));
spockInput.addEventListener('click', () => handleInput('spock'));


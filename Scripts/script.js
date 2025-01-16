let rockInput = document.getElementById('rock');
let paperInput = document.getElementById('paper');
let scissorsInput = document.getElementById('scissors');
let lizardInput = document.getElementById('lizard');
let spockInput = document.getElementById('spock');

async function getCPUresponse() {
    const response = await fetch('https://rockpaperscissorlizardspock-project-e7hsd0fphbhahhhq.westus-01.azurewebsites.net/RPScLScpu');
    const data = await response.text();
    console.log(data);
    return data;
}

async function gameCheck(userInput) {
    let cpuResponse = await getCPUresponse();

    if (userInput === cpuResponse) {
        alert('Tie!');
        return;
    }

    switch (userInput) {
        case "scissors":
            if (cpuResponse === "paper" || cpuResponse === "lizard") {
                alert(`You win! Scissors beats ${cpuResponse}.`);
            } else {
                alert(`You lose! ${cpuResponse} beats Scissors.`);
            }
            break;

        case "rock":
            if (cpuResponse === "lizard" || cpuResponse === "scissors") {
                alert(`You win! Rock beats ${cpuResponse}.`);
            } else {
                alert(`You lose! ${cpuResponse} beats Rock.`);
            }
            break;

        case "paper":
            if (cpuResponse === "rock" || cpuResponse === "spock") {
                alert(`You win! Paper beats ${cpuResponse}.`);
            } else {
                alert(`You lose! ${cpuResponse} beats Paper.`);
            }
            break;

        case "lizard":
            if (cpuResponse === "spock" || cpuResponse === "paper") {
                alert(`You win! Lizard beats ${cpuResponse}.`);
            } else {
                alert(`You lose! ${cpuResponse} beats Lizard.`);
            }
            break;

        case "spock":
            if (cpuResponse === "scissors" || cpuResponse === "rock") {
                alert(`You win! Spock beats ${cpuResponse}.`);
            } else {
                alert(`You lose! ${cpuResponse} beats Spock.`);
            }
            break;

        default:
            alert("Invalid input! Please choose scissors, rock, paper, lizard, or spock.");
    }
}


rockInput.addEventListener('click', () => {
    gameCheck('rock');
});
paperInput.addEventListener('click', () => {
    gameCheck('paper');
});
scissorsInput.addEventListener('click', () => {
    gameCheck('scissors');
});
lizardInput.addEventListener('click', () => {
    gameCheck('lizard');
});
spockInput.addEventListener('click', () => {
    gameCheck('spock');
});
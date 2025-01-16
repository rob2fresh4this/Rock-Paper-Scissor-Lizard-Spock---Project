async function getCPUresponse() {
    const response = await fetch('https://rockpaperscissorlizardspock-project-e7hsd0fphbhahhhq.westus-01.azurewebsites.net/RPScLScpu');
    const data = await response.text();
    console.log(data);
    return data;
}

async function main() {
    let cpuResponse = await getCPUresponse();
    console.log(cpuResponse);

    switch (cpuResponse) {
        case "rock":
            console.log("its rock");
            break;
        case "paper":
            console.log("its paper");
            break;
        case "scissors":
            console.log("its scissors");
            break;
        case "lizard":
            console.log("its lizard");
            break;
        case "spock":
            console.log("its spock");
            break;
        default:
            console.log("error");
            break;
    }
}

main();
function game(){
    var userSelection = document.getElementById("userSelection").value;
    console.log(document.getElementById("userSelection").value);

    var computerSelection = Math.floor(Math.random() * 3) + 1;
    console.log(computerSelection);
    if (computerSelection==1){
        computerSelection = 'rock';
    } else if (computerSelection==2){
        computerSelection = "paper";
    } else{
        computerSelection = "scissors";
    }

    document.getElementById("computerSelection").innerText = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    console.log(userSelection + " " + computerSelection)

    if (userSelection=='rock' && computerSelection == 'rock') {
        document.getElementById("results").innerText = "Tie";
        console.log("Tie");
    } else if (userSelection=='rock' && computerSelection == 'paper') {
        document.getElementById("results").innerText = "Computer Wins";
        console.log("Computer wins");
    } else if (userSelection=='rock' && computerSelection == 'scissors') {
        document.getElementById("results").innerText = "Player Wins";
        console.log("Player wins");
    } else if (userSelection=='paper' && computerSelection == 'rock') {
        document.getElementById("results").innerText = "Player Wins";
        console.log("Player wins");
    } else if (userSelection=='paper' && computerSelection == 'paper') {
        document.getElementById("results").innerText = "Tie";
        console.log("Tie");
    } else if (userSelection=='paper' && computerSelection == 'scissors') {
        document.getElementById("results").innerText = "Computer Wins";
        console.log("Computer win");
    } else if (userSelection=='scissors' && computerSelection == 'rock') {
        document.getElementById("results").innerText = "Computer Wins";
        console.log("Computer wins");
    } else if (userSelection=='scissors' && computerSelection == 'paper') {
        document.getElementById("results").innerText = "Player Wins";
        console.log("Player wins");
    } else if (userSelection=='scissors' && computerSelection == 'scissors') {
        document.getElementById("results").innerText = "Tie";
        console.log("Tie");
    } else{
        document.getElementById("results").innerText = "Something went wrong.";
        console.log("Something went wrong.");
    }
}
let userScore = 0;
let computerScore = 0;


function playGame(userChoice) {

    // Computer choices
    const choices = ["Rock", "Paper", "Scissors"];

    // Generate random choice
    const randomIndex = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomIndex];


    // Display choices
    document.getElementById("userChoice").textContent =
        "Your Choice: " + userChoice;

    document.getElementById("computerChoice").textContent =
        "Computer Choice: " + computerChoice;


    // Check result
    let result = "";


    if (userChoice === computerChoice) {

        result = "It's a Draw! 🤝";

    }

    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "You Win! 🎉";

        userScore++;

    }

    else {

        result = "Computer Wins! 🤖";

        computerScore++;

    }


    // Display result
    document.getElementById("resultText").textContent = result;


    // Display scores
    document.getElementById("userScore").textContent = userScore;

    document.getElementById("computerScore").textContent = computerScore;
}
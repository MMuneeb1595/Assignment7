const player1Choice = prompt("Player 1, enter your choice (rock, paper, or scissors):").toLowerCase();
const player2Choice = prompt("Player 2, enter your choice (rock, paper, or scissors):").toLowerCase();
if (player1Choice === player2Choice) {
    console.log("It's a Tie!");
} else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
) {
    console.log("Player 1 Wins!");
} else if (
    (player2Choice === "rock" && player1Choice === "scissors") ||
    (player2Choice === "paper" && player1Choice === "rock") ||
    (player2Choice === "scissors" && player1Choice === "paper")
) {
    console.log("Player 2 Wins!");
} else {
    console.log("Invalid input. Please enter rock, paper, or scissors.");
}
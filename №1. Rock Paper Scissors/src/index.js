// Input1, Input2 --> Output

// "scissors", "paper" --> "Player 1 won!"
// "paper", "rock" --> "Player 1 won"
// "rock", "scissors" --> "Player 1 won"

// "scissors", "rock" --> "Player 2 won!"
// "paper", "scissors" --> "Player 2 won"
// "rock", "paper" --> "Player 2 won"

// "scissors", "scissors" --> "Draw!"
// "paper", "paper" --> "Draw!"
// "rock", "rock" --> "Draw!"

function rps(firstPlayer, secondPlayer) {
    if (firstPlayer == "scissors" && secondPlayer == "paper") {
      return "Player 1 won!";
    } else if (firstPlayer == "paper" && secondPlayer == "rock") {
      return "Player 1 won!";
    } else if (firstPlayer == "rock" && secondPlayer == "scissors") {
      return "Player 1 won!";
    } else if (firstPlayer == "paper" && secondPlayer == "scissors") {
      return "Player 2 won!";
    } else if (firstPlayer == "rock" && secondPlayer == "paper") {
      return "Player 2 won!";
    } else if (firstPlayer == "scissors" && secondPlayer == "rock") {
      return "Player 2 won!";
    } else {
      return "Draw!";
    }
  }
  
  rps("scissors", "rock"); // "Player 2 win"
  rps("rock", "scissors"); // "Player 1 win"
  rps("scissors", "scissors"); // "Draw!"
  rps("rock", "rock"); // "Draw!"
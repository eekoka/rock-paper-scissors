function getComputerChoice() {
   let randNumber = Math.random();
   //console.log(randNumber);
   let computerChoice;

   if (randNumber < 0.33333) {
      computerChoice = "Rock";
   } else if (randNumber < 0.66667) {
      computerChoice = "Paper";
   } else if (randNumber >= 0.66667) {
      computerChoice = "Scissors";
   }

   console.log("Computer Choice: " + computerChoice);
   return computerChoice;
}


function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toUpperCase();
   computerSelection = computerSelection.toUpperCase();

   if (playerSelection == computerSelection) {
      return "Draw";
   } else if ( (playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
               (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
               (playerSelection == "PAPER" && computerSelection == "ROCK") ) {
      return "Win";
   } else {
      return "Loss";
   }
}

function game (totalRounds=5) {

   console.log(totalRounds + "-round Game Not Counting Draws.");

   let playerVerdict;
   let playerScore = 0;
   let computerScore = 0;
   //const totalRounds = 5;
   let r = 1;

   //update code at a later stage to allow player to choose total number of rounds to play
   while (r <= totalRounds) {

     console.log("Round " + r);

     //make a function to get player choice and validate of entry if typed in
     const playerSelection = "Rock";
     console.log("Player Choice: " + playerSelection);
     const computerSelection = getComputerChoice();

     playerVerdict = playRound(playerSelection, computerSelection);
     console.log("You " + playerVerdict + " Round");
     
     if (playerVerdict == "Win") {
       playerScore++;
       r++;
     } else if (playerVerdict == "Loss") {
       computerScore++;
       r++;
     }
   }

   console.log("Game Over!");
   if (playerScore > computerScore) console.log("You Win Overall!");
   else if (playerScore = computerScore) console.log("Draw Game Overall!");
   else console.log("You Loss Overall!");
   console.log("Your Final Score: "  + playerScore + " / " + totalRounds);
   if (playerScore == totalRounds) console.log("PERFECT SCORE!!!");

}

game(1);

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

function getPlayerChoice () {
   let playerChoice;
   let validEntry;
   let extraMessage = "";

   do {
      playerChoice = prompt(extraMessage + "Rock, Paper or Scissors?");
      validEntry = playerChoice.toUpperCase() == "ROCK" || 
                   playerChoice.toUpperCase() == "PAPER" ||
                   playerChoice.toUpperCase() == "SCISSORS";
      
      if (validEntry == false) extraMessage = "Dude! That was an invalid entry: " + playerChoice + "\nPlease Try Again!\n";
   }
   while (validEntry !== true);  

   console.log("Player Choice: " + playerChoice);
   return playerChoice;
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

   let playerScore = 0;
   let computerScore = 0;
   //const totalRounds = 5;
   let playerVerdict;
   let r = 1;

   //update code at a later stage to allow player to choose total number of rounds to play
   while (r <= totalRounds) {

     console.log("Round " + r);

     //make a function to get player choice and validate of entry if typed in
     const playerSelection = getPlayerChoice();
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
   else if (playerScore == computerScore) console.log("Draw Game Overall!");
   else console.log("You Loss Overall!");
   console.log("Your Final Score: "  + playerScore + " / " + totalRounds);
   if (playerScore == totalRounds) console.log("PERFECT SCORE!!!");
   if (playerScore == 0) console.log("YOU GOT WRECKED!!!");
}

game();

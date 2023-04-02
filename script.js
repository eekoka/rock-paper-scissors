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

   //console.log("Computer Choice: " + computerChoice);
   return computerChoice;
}

function getPlayerChoice(idValue) {
   let playerRef = document.querySelector("#"+idValue);
   return playerRef.textContent;
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

//Plays 5 rounds - the number of rounds can be added as parameter
//then play can choose number of rounds they want to play
function game () {

   //get reference to the container that already exist in the html
   const playerDiv = document.querySelector("#player-div");
   const computerDiv = document.querySelector("#computer-div");
   const resultDiv1 = document.querySelector("#result-line1");
   const resultDiv2 = document.querySelector("#result-line2");
   const resultDiv3 = document.querySelector("#result-line3");

   //initialize variables
   let playerScore = 0;
   let computerScore = 0;
   const totalRounds = 5;
   let r = 1;

   //buttons is a node list - iterate through each button
   //and launch round when any of the button is clicked
   const buttons = document.querySelectorAll(".choice-button");
   buttons.forEach((button)=> {
   button.addEventListener("click", (e) => {
         let playerVerdict;
         let currentRound = r;

         //do not run of total number of rounds achieved
         if (r > totalRounds) return;
      
         const playerSelection = getPlayerChoice(e.target.id); 
         const computerSelection = getComputerChoice();

         playerVerdict = playRound(playerSelection, computerSelection);
         
         playerDiv.textContent = "Your Choice: " + playerSelection;
         computerDiv.textContent = "Computer Choice: " + computerSelection;

         if (playerVerdict == "Win") {
            resultDiv1.style.color = 'green';
            playerScore++;
            r++;
         } else if (playerVerdict == "Loss") {
            resultDiv1.style.color = 'red';
            computerScore++;
            r++;
         } else {
            resultDiv1.style.color = 'black';
         }

         //add some text in the new div
         resultDiv1.textContent = "You " + playerVerdict + " Round " + currentRound;
         resultDiv2.textContent = "Continue Playing";

         //show results when game is over
         let finalResult = "";
         if (r === totalRounds+1) {
            //removing choice buttons at the end of game
            const choiceContainer = document.querySelector(".choice-container");
            choiceContainer.parentNode.removeChild(choiceContainer);
            const subInstruction = document.querySelector("#sub-instruction");
            subInstruction.parentNode.removeChild(subInstruction);

            if (playerScore > computerScore) {
               finalResult = "You Win Overall!";
               resultDiv2.style.color = 'green';
            } else if (playerScore == computerScore) {
               finalResult = "Draw Game Overall!";
            } else {
               finalResult = "You Loss Overall!";
               resultDiv2.style.color = 'red';
            } 
            resultDiv2.textContent = "Game Over: " + finalResult;
            resultDiv3.textContent = "Your Final Score is "  + playerScore + " / " + totalRounds;

            if (playerScore == totalRounds) resultDiv3.textContent += ", PERFECT SCORE!";
            if (playerScore == 0) resultDiv3.textContent += ", YOU GOT WRECKED!";
         }
   });
   });

}

//run game
game();

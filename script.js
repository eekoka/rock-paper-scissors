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

//Play for first player to reach 5 points: target score
//the target score can be added as parameter
//then player can choose target score before start of game
function game () {

   //get reference to the container that already exist in the html
   const playerDiv = document.querySelector("#player-div");
   const computerDiv = document.querySelector("#computer-div");
   const playerDivText = document.querySelector("#player-div-text");
   const computerDivText = document.querySelector("#computer-div-text");

   const playerImg = document.createElement("img");
   const computerImg = document.createElement("img");

   const resultDiv1 = document.querySelector("#result-line1");
   const resultDiv2 = document.querySelector("#result-line2");
   const resultDiv3 = document.querySelector("#result-line3");

   //initialize variables
   let playerScore = 0;
   let computerScore = 0;
   const targetScore = 5;
   let r = 1;
   let gameOver = false;
   let playerVerdict;
   let finalResult;
   let currentRound;

   //buttons is a node list - iterate through each button
   //and launch round when any of the button is clicked
   const buttons = document.querySelectorAll(".choice-button");
   buttons.forEach((button)=> {
   button.addEventListener("click", (e) => {

         currentRound = r;
         //do not run of total number of rounds achieved
         if (gameOver === true) return;
      
         const playerSelection = getPlayerChoice(e.target.id); 
         const computerSelection = getComputerChoice();

         playerVerdict = playRound(playerSelection, computerSelection);
         
         playerDivText.textContent = "Your Choice: " + playerSelection;
         computerDivText.textContent = "Computer Choice: " + computerSelection;

         //show image of player choice and computer choice
         playerImg.src = "images/player-" + playerSelection.toLowerCase() + ".png";
         computerImg.src = "images/computer-" + computerSelection.toLowerCase() + ".png";
         playerImg.width = 200;
         computerImg.width = 200;
         playerDiv.appendChild(playerImg);
         computerDiv.appendChild(computerImg);    

         if (playerVerdict == "Win") {
            resultDiv1.style.color = 'green';
            playerScore++;
         } else if (playerVerdict == "Loss") {
            resultDiv1.style.color = 'red';
            computerScore++;
         } else {
            resultDiv1.style.color = 'black';
         }

         r++;

         //Over ends when a player reaches 5 points
         if (playerScore >= targetScore || computerScore >= targetScore) gameOver = true;

         if (gameOver !== true) {
            //add some text in the new div
            resultDiv1.textContent = "You " + playerVerdict + " Round " + currentRound;
            resultDiv2.textContent = playerScore + " - " + computerScore;
            resultDiv3.textContent = "Continue Playing";
         } else if (gameOver === true) {
            //show results when game is over
            //removing choice buttons at the end of game
            const choiceContainer = document.querySelector(".choice-container");
            choiceContainer.parentNode.removeChild(choiceContainer);
            const subInstruction = document.querySelector("#sub-instruction");
            subInstruction.parentNode.removeChild(subInstruction);
            resultDiv1.parentNode.removeChild(resultDiv1);

            if (playerScore > computerScore) {
               finalResult = "You Win Overall!";
               resultDiv2.style.color = 'green';
            } else if (playerScore == computerScore) {
               finalResult = "Draw Game Overall!";
            } else {
               finalResult = "You Loss Overall!";
               resultDiv2.style.color = 'red';
            } 

            resultDiv2.textContent = playerScore + " - " + computerScore;
            resultDiv3.textContent = "Game Over: " + finalResult;

            if (computerScore == 0) resultDiv3.textContent += ", PERFECT SCORE!";
            if (playerScore == 0) resultDiv3.textContent += ", YOU GOT WRECKED!";
         }

   });
   });

}

//run game
game();

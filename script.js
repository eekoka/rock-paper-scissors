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
     const playerSelection = playerInput;
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

//game();

//get reference to the container that already exist in the html
const container = document.querySelector("#information");

//DOM modifications to display results
const subContainer = document.createElement("div");
subContainer.classList.add("sub-container");
const playerDiv = document.createElement("div");
playerDiv.classList.add("player-div");
const computerDiv = document.createElement("div");
computerDiv.classList.add("computer-div");
subContainer.appendChild(playerDiv);
subContainer.appendChild(computerDiv);
container.appendChild(subContainer);

const subContainer2 = document.createElement("div");
subContainer2.classList.add("result2-sub-container");
const resultDiv1 = document.createElement("p");
resultDiv1.classList.add("result-line1");
const resultDiv2 = document.createElement("p");
resultDiv2.classList.add("result-line2");
//append the div to container
subContainer2.appendChild(resultDiv1);
subContainer2.appendChild(resultDiv2);
container.appendChild(subContainer2);

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

      //do not run of total number of rounds achieved
      if (r > totalRounds) return;
 
      const playerSelection = e.target.id; 
      const computerSelection = getComputerChoice();
 
      playerVerdict = playRound(playerSelection, computerSelection);
      
      playerDiv.textContent = "You Choice: " + playerSelection;
      computerDiv.textContent = "Computer Choice: " + computerSelection;

      //add some text in the new div
      resultDiv1.textContent = "You " + playerVerdict + " Round " + r;
      
      if (playerVerdict == "Win") {
        playerScore++;
        r++;
      } else if (playerVerdict == "Loss") {
        computerScore++;
        r++;
      }
      resultDiv2.textContent = "Play Round " + r;
  });
});
let userScore = 0; //Variable to hold the user's score
let computerScore = 0; //Variable to hold the computer's score
let userChoice; //Variable to hold the user's choice
let computerChoice; //Variable to hold the computer's choice
let rounds = 0;

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let resultPara = document.querySelector(".result");
let roundPara = document.querySelector(".round");
let userScorePara = document.querySelector(".user-score");
let compScorePara = document.querySelector(".computer-score");

let playAgainButton = document.querySelector(".play-again");

rockButton.addEventListener("click", () => {
  userChoice = "rock";
  playRound(userChoice);
});

paperButton.addEventListener("click", () => {
  userChoice = "paper";
  playRound(userChoice);
});

scissorsButton.addEventListener("click", () => {
  userChoice = "scissors";
  playRound(userChoice);
});

playAgainButton.addEventListener("click", resetScoresAndRounds);

//Function to make the computer make a random choice
function computerPlay() {
  computerChoice = Math.floor(Math.random() * 10); //Computer's choice is a number from 0-9
  switch (
    computerChoice //Compare computer choice to possible values
  ) {
    case 0: //Values 0-3 represent 'rock'
    case 1:
    case 2:
    case 3:
      computerChoice = "rock";
      break;
    case 4: //Values 4-6 represent 'paper'
    case 5:
    case 6:
      computerChoice = "paper";
      break;
    case 7: //Values 7-9 represent 'scissors'
    case 8:
    case 9:
      computerChoice = "scissors";
  }
}

//Function to play a round of rock-paper-scissors, update the scores, and return the result
function playRound(playerSelection) {
  //Takes user choice
  computerPlay();
  if (playerSelection === "rock")
    displayResultsIfRock(playerSelection, computerChoice);
  else if (playerSelection === "paper")
    displayResultsIfPaper(playerSelection, computerChoice);
  else displayResultsIfScissors(playerSelection, computerChoice);
  rounds++;
  displayScoresAndRounds();
}

function displayResultsIfRock(player, comp) {
  if (player === comp) resultPara.textContent = "Tie! Both chose rock!";
  else if (comp === "paper") {
    resultPara.textContent = "Computer wins by choosing paper!";
    computerScore++;
  } else {
    resultPara.textContent = "You win by choosing rock!";
    userScore++;
  }
}

function displayResultsIfPaper(player, comp) {
  if (player === comp) resultPara.textContent = "Tie! Both chose paper!";
  else if (comp === "scissors") {
    resultPara.textContent = "Computer wins by choosing scissors!";
    computerScore++;
  } else {
    resultPara.textContent = "You win by choosing paper!";
    userScore++;
  }
}

function displayResultsIfScissors(player, comp) {
  if (player === comp) resultPara.textContent = "Tie! Both chose scissors!";
  else if (comp === "rock") {
    resultPara.textContent = "Computer wins by choosing rock!";
    computerScore++;
  } else {
    resultPara.textContent = "You win by choosing scissors!";
    userScore++;
  }
}

function displayScoresAndRounds() {
  roundPara.textContent = `Rounds: ${rounds}`;
  userScorePara.textContent = `User Score: ${userScore}`;
  compScorePara.textContent = `Computer Score: ${computerScore}`;
}

function resetScoresAndRounds() {
  userScore = 0;
  computerScore = 0;
  rounds = 0;
  resultPara.textContent = "";
  roundPara.textContent = "";
  userScorePara.textContent = "";
  compScorePara.textContent = "";
}

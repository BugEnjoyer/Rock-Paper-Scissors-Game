let computerChoice= '';
let humanChoice='';
let result='';
function getComputerChoice() {
  let randomNumber= Math.random();
  if (randomNumber <= 1/3 ) {
    computerChoice= 'rock';
  } else if ( randomNumber <= 2/3 && randomNumber > 1/3) {
     computerChoice= 'paper';
  } else if ( randomNumber <= 1 && randomNumber > 2/3) {
    computerChoice= 'scissors';
  }
  return computerChoice;
}

function getResult(humanChoice, computerChoice) {
  if ( humanChoice === computerChoice ) {
   result = 'tie!';
  } else if ( humanChoice === 'rock' && computerChoice === 'scissors') {
     result = 'You win!';
  }else if ( humanChoice === 'paper' && computerChoice === 'scissors') {
     result = 'You lose!';
  }else if ( humanChoice === 'rock' && computerChoice === 'paper') {
     result = 'You lose!';
  }else if ( humanChoice === 'paper' && computerChoice === 'rock') {
     result = 'You win!';
  }else if ( humanChoice === 'scissors' && computerChoice === 'rock') {
     result = 'You lose!';
  }else if ( humanChoice === 'scissors' && computerChoice === 'paper') {
     result = 'You win!';
  }
  console.log(result);
  return result;
}

function playRound() {
  getComputerChoice();
  getResult(humanChoice, computerChoice);
    document.querySelector('.js-result-para')
    .innerHTML= `Result: You chose ${humanChoice} and computer chose ${computerChoice}.
    ${result}`
}


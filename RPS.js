let computerChoice= '';
let randomNumber= Math.random();
function getComputerChoice() {
  if (randomNumber <= 1/3 ) {
    computerChoice= 'rock';
  } else if ( randomNumber <= 2/3 && randomNumber > 1/3) {
     computerChoice= 'paper';
  } else if ( randomNumber <= 1 && randomNumber > 2/3) {
    computerChoice= 'scissors';
  }
  return computerChoice;
}

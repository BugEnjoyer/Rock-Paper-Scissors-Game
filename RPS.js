let computerChoice= '';
let humanChoice='';
let result='';

score={
   Wins: 0,
   Losses: 0
};

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

function updateScore() {
   if( result === 'You win!' && score.Wins < 5) {
      score.Wins ++;
     } else if ( result === 'You lose!' && score.Losses < 5) {
      score.Losses ++;
     }
    if ( score.Wins === 0) {
      document.querySelector('.js-win-para')
     .innerHTML='Wins: 0';
     }else if ( score.Wins === 5) {
      document.querySelector('.js-win-lose')
      .innerHTML='Gratulation! You have won!';
      document.querySelector('.new-match-button').innerHTML='New Match';
      document.querySelector('.new-match-button').style.opacity= 1;
      document.querySelector('.js-win-para')
     .innerHTML=`Wins: ${score.Wins}`;
    } else {
      document.querySelector('.js-win-para')
     .innerHTML=`Wins: ${score.Wins}`;
    }
    if ( score.Losses === 0) {
      document.querySelector('.js-lose-para')
     .innerHTML='Losses: 0';
   }else if ( score.Losses === 5) {
      document.querySelector('.js-win-lose')
      .innerHTML='Game Over! You have lost!';
      document.querySelector('.new-match-button').innerHTML='New Match';
      document.querySelector('.new-match-button').style.opacity= 1;
      document.querySelector('.js-lose-para')
     .innerHTML=`Wins: ${score.Losses}`;
    } else {
      document.querySelector('.js-lose-para')
     .innerHTML=`Losses: ${score.Losses}`;
    }
      
}

function playRound() {
  getComputerChoice();
  getResult(humanChoice, computerChoice);
  updateScore();
    document.querySelector('.js-result-para')
    .innerHTML= `Result: You chose ${humanChoice} and computer chose ${computerChoice}.
    ${result}`
}

function resetScore() {
   score={
      Wins: 0,
      Losses: 0
   };
   document.querySelector('.js-win-para')
   .innerHTML = 'Wins: 0';
   document.querySelector('.js-lose-para')
   .innerHTML = 'Losses: 0';
}


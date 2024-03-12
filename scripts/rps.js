
function updateScore(){
  document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Loss: ${score.loss}, Ties: ${score.tie}`;
}


let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    tie: 0,
  }
/*
if (!score){
  score = {
    wins: 0,
    loss: 0,
    tie: 0
  }
}
*/

document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Loss: ${score.loss}, Ties: ${score.tie}`;

function pickComputerMove(){
const randomNumber = Math.random(); 

  
if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
} 
else if (randomNumber > 1/3 && randomNumber <=2/3) {
  computerMove = 'paper';
}
else if (randomNumber > 2/3 && randomNumber <=1) {
  computerMove = 'scissors';
}

console.log(computerMove);

return computerMove;
}

  function playGame(playerMove){

  const computerMove = pickComputerMove();


  let result = '';



if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
  result = 'You lose.';
  }
  else if (computerMove === 'paper') {
    result = 'You win.';
  }
  else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
} 

else if (playerMove === 'paper') { if (computerMove === 'rock') {
  result = 'You win.';
}
else if (computerMove === 'paper') {
  result = 'Tie.';
}
else if (computerMove === 'scissors') {
  result = 'You lose.';
}
} 

else if (playerMove === 'rock') {
if (computerMove === 'rock') {
  result = 'Tie.';
}
else if (computerMove === 'paper') {
  result = 'You lose.';
}
else if (computerMove === 'scissors') {
  result = 'You win.';
}
}


if (result === 'You win.') {
  score.wins ++;
}

else if (result === 'You lose.') {
  score.loss ++;
}

else if (result === 'Tie.') {
  score.tie ++;
}

localStorage.setItem('score', JSON.stringify(score));


alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Loss: ${score.loss}, Ties: ${score.tie}`);
updateScore();

document.querySelector('.js-moves')
.innerHTML = `You <img class="js-moves-icon" src="icons/${playerMove}.png"> - <img class="js-moves-icon" src="icons/${computerMove}.png"> computer`;

document.querySelector('.js-result').innerText = `${result}`;
}


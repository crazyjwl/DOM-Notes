var scores,roundScore,activePlayer,dice,gamePlaying;
var dice_image = document.querySelector('.dice');
var name0 = document.querySelector('#name-0');
var name1 = document.querySelector('#name-1');

//dice = Math.floor(Math.random()*6) + 1;
//初始化
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    dice = Math.floor(Math.random()*6) + 1;
    current = document.querySelector('#current-'+activePlayer);
    dice_image.src = 'images/dice-'+dice+'.png';
    dice_image.style.display = 'block';

    if(dice == 1){
      initActive();
    }else{
      roundScore += dice;
      current.textContent = roundScore;
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    scores[activePlayer] += roundScore;
    if(scores[activePlayer] >= 100){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      dice_image.style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      showScore();
      gamePlaying = false;
    }else{
      initActive();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', function(){
  init();
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
})

function init(){
  gamePlaying = true;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  dice_image.style.display = 'none';
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  showScore();
}

function initActive(){
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  activePlayer = 1 - activePlayer;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  dice_image.style.display = 'none';
  roundScore = 0;
  showScore();
}

function showScore(){
  document.querySelector('#score-0').textContent = scores[0];
  document.querySelector('#score-1').textContent = scores[1];
}

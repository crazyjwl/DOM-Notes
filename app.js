var scores,roundScore,activePlayer,dice;
var dice_image = document.querySelector('.dice');
var name0 = document.querySelector('#name-0');
var name1 = document.querySelector('#name-1');

//dice = Math.floor(Math.random()*6) + 1;
//初始化
function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  dice_image.style.display = 'none';
  showScore();
}
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  dice = Math.floor(Math.random()*6) + 1;
  current = document.querySelector('#current-'+activePlayer);
  if(dice == 1){
    dice_image.src = 'images/dice-1.png';
    initActive();
  }else{
    roundScore += dice;
    current.textContent = roundScore;
    dice_image.src = 'images/dice-'+dice+'.png';
    dice_image.style.display = 'block';
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  scores[activePlayer] += roundScore;
  if(scores[activePlayer] >= 100){
    document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
  }
  initActive();
});

document.querySelector('.btn-new').addEventListener('click', function(){
  init();
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
})

function initActive(){
  current.textContent = 0;
  activePlayer = 1 - activePlayer;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  roundScore = 0;
  showScore();
}

function showScore(){
  document.querySelector('#score-0').textContent = scores[0];
  document.querySelector('#score-1').textContent = scores[1];
}

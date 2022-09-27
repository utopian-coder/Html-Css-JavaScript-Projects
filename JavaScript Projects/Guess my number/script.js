'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 23;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('🤧 You Lost!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    displayMessage('✅ You Won!');
    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(153, 28, 122)';
  document.querySelector('.number').style.width = '15rem';
});

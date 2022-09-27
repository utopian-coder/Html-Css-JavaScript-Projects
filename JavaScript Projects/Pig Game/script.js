'use strict';

//Selecting elements
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playerOneCurrScore = document.querySelector('#current--0');
const playerTwoCurrScore = document.querySelector('#current--1');

const scores = [0, 0];
let currScore, activePlayer, playing;

// Starting state
const init = function () {
  scoreOne.textContent = '0';
  scoreTwo.textContent = '0';
  playerOneCurrScore.textContent = 0;
  playerTwoCurrScore.textContent = 0;
  dice.classList.add('hidden');
  playerOne.classList.add('player--active');
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--active');
  playerTwo.classList.remove('player--winner');

  scores[0] = 0;
  scores[1] = 0;
  currScore = 0;
  activePlayer = 0;
  playing = 1;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  currScore = 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

//Rolling dice functionality
rollDice.addEventListener('click', function () {
  if (playing) {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = 0;
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);

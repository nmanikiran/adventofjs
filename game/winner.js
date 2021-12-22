document.addEventListener('DOMContentLoaded', () => {
  const $winner = document.querySelector('.winner');

  const queryparams = new URLSearchParams(location.search);
  const { user: userweapon, computer: computerweapon } =
    Object.fromEntries(queryparams);

  const values = ['Rock', 'Paper', 'Scissors'];
  const user = values[userweapon].toLowerCase();
  const computer = values[computerweapon].toLowerCase();

  const yourPick = document.querySelector('.your-pick img');
  const computerPick = document.querySelector('.computer-pick img');
  yourPick.src = `./images/${user}.png`;
  computerPick.src = `./images/${computer}.png`;

  if (user === computer) {
    // tie break
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    $winner.classList.add('you-win');
  } else {
    $winner.classList.add('computer-wins');
  }
  const play = document.querySelector('.play-again');
  play.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const temp = location.href.split('/').slice(0, -1);
    location.href = temp.join('/');
  });
});

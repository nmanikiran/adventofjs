document.addEventListener('DOMContentLoaded', (e) => {
  const buttons = document.querySelectorAll('button');
  const total = buttons.length;

  const selectNext = (element) => {
    element.classList.remove('jiggle');
    const nextIndex = Math.floor(Math.random() * total) + 1;
    buttons[nextIndex].classList.add('jiggle');
  };

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (Array.from(e.target.classList).includes('jiggle')) {
        selectNext(e.target);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    const key = e.keyCode || e.which;
    const specialKeys = [
      16, 20, 13, 9, 8, 219, 221, 186, 187, 188, 189, 190, 220,
    ];
    const btnEl = document.querySelector('.jiggle');
    const btnText = btnEl.innerText;
    if (
      String.fromCharCode(e.keyCode) === btnText ||
      specialKeys.includes(key)
    ) {
      selectNext(btnEl);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      location.href =
        location.href +
        `winner.html?user=${index}&computer=${Math.floor(Math.random() * 3)}`;
      console.log(location.href, index);
    });
  });
});

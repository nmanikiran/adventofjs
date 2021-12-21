document.addEventListener('DOMContentLoaded', () => {
  const liItems = document.querySelectorAll('li');

  liItems.forEach((li, index) => {
    li.addEventListener('click', (e) => {
      console.log(li.getBoundingClientRect());
      e.preventDefault();
      e.stopPropagation();
      const answer = li.querySelector('.answer');

      li.classList.toggle('expand');
    });
  });
});

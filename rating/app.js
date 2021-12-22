document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  const starRating = document.querySelector('.star-rating');

  links.forEach((link, index) => {
    link.addEventListener('mouseover', (e) => {
      starRating.classList.add(`star-${index + 1}`);
    });
    link.addEventListener('mouseout', (e) => {
      starRating.classList.remove(`star-${index + 1}`);
    });
  });
});

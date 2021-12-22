document.addEventListener('DOMContentLoaded', function () {
  const link = document.querySelector('#something');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.close');

  const toggleModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    overlay.classList.toggle('show');
  };

  link.addEventListener('click', toggleModal);

  close.addEventListener('click', toggleModal);
});

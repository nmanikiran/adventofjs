document.addEventListener('DOMContentLoaded', () => {
  const $closeToaster = document.querySelector('#closeToaster');
  const $toaster = document.querySelector('.toaster');

  $closeToaster.addEventListener('click', () => {
    $toaster.classList.toggle('collapsed');
  });
  document.addEventListener('mousemove', (e) => {
    if (e.clientY === 0) {
      $toaster.classList.toggle('collapsed');
    }
  });
});

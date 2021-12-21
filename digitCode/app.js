document.addEventListener('DOMContentLoaded', (e) => {
  const $input1 = document.querySelector('[name="verification_1"]');
  const $inputs = document.querySelectorAll('input');
  let password = '';

  const isInteger = (num) => /^-?[0-9]+$/.test(num + '');

  const validatePassword = () => {
    password = password.trim();
    if (password.length === 4 && isInteger(password)) {
      setTimeout(() => {
        alert('Yesss');
      });
    }
  };

  $input1.addEventListener('paste', (e) => {
    e.preventDefault();
    e.stopPropagation();
    password = e.clipboardData.getData('text/plain').trim();
    $inputs.forEach((input, index) => {
      input.value = password[index];
      $inputs[index].focus();
    });
    validatePassword();
  });

  $inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
      password = password + e.key;
      if (Array.from($inputs).length > index + 1) {
        setTimeout(() => {
          $inputs[index + 1].focus();
        }, 0);
      }
      validatePassword();
    });
  });
});

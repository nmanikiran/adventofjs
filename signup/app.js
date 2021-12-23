document.addEventListener('DOMContentLoaded', () => {
  const $name = document.querySelector('#name');
  const $email = document.querySelector('#email');
  const $password = document.querySelector('#password');
  const $confirm = document.querySelector('#confirm-password');
  const $showHideElList = document.querySelectorAll('.show-hide');

  const errorMessages = {
    name: 'A name is required',
    email: 'Must enter a valid email address',
    password: 'A password is required',
    confirm: 'Password and confirm password must be the same',
  };

  const errorImg = () => {
    const img = document.createElement('img');
    img.src = './images/error.svg';
    img.alt = 'error';
    return img;
  };
  const successImg = () => {
    const img = document.createElement('img');
    img.src = './images/success.svg';
    img.alt = 'success';
    return img;
  };

  $showHideElList.forEach((showHide) => {
    showHide.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const input = showHide.parentNode.querySelector('input');
      input.type = input.type === 'password' ? 'text' : 'password';
      showHide.parentNode.classList.toggle('show');
    });
  });
  const getErrorAndSuccessEl = (el) => {
    const error = el.parentNode.querySelector('.error');
    error.innerHTML = '';

    const success = el.parentNode.querySelector('.success');
    return { success, error };
  };
  $name.addEventListener('blur', () => {
    const { error, success } = getErrorAndSuccessEl($name);
    if (!$name.value) {
      error.appendChild(errorImg());
      error.append(errorMessages['name']);
    } else {
      error.innerHTML = '';
      success.appendChild(successImg());
    }
  });

  $email.addEventListener('blur', () => {
    const { error, success } = getErrorAndSuccessEl($email);

    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexp.test($email.value)) {
      error.appendChild(errorImg());
      error.append(errorMessages['email']);
    } else {
      error.innerHTML = '';
      success.appendChild(successImg());
    }
  });
  $password.addEventListener('blur', () => {
    const { error, success } = getErrorAndSuccessEl($password);

    if (!$password.value) {
      error.appendChild(errorImg());
      error.append(errorMessages['password']);
    } else {
      error.innerHTML = '';
      success.appendChild(successImg());
    }
  });
  $confirm.addEventListener('blur', () => {
    const { error, success } = getErrorAndSuccessEl($confirm);

    if (!$confirm.value) {
      error.appendChild(errorImg());
      error.append(errorMessages['confirm']);
    } else if ($confirm.value !== $password.value) {
      error.appendChild(errorImg());
      error.append(errorMessages['confirm']);
    } else {
      error.innerHTML = '';
      success.appendChild(successImg());
    }
  });
});

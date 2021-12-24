document.addEventListener('DOMContentLoaded', () => {
  const $length = document.querySelector('#length');
  const $password = document.querySelector('#password');
  const $copyBtn = document.querySelector('button');
  const $lengthText = document.querySelector('#lengthText');
  const $checkboxes = document.querySelectorAll('input[type="checkbox"]');

  const similarCharacters = ['l', '1', 'o', '0', 'i', 'O', 'I', 'L'];
  const numbers = new Array(10).fill(0).map((_, i) => i);
  const symbols = ['@', '#', '$', '%'];
  const lowerCaseLetters = new Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));
  const upperCaseLetters = lowerCaseLetters.map((letter) =>
    letter.toUpperCase()
  );

  const config = {
    length: parseInt($length.value),
    symbols: $checkboxes[1].checked,
    numbers: $checkboxes[0].checked,
    lowercase: $checkboxes[2].checked,
    uppercase: $checkboxes[3].checked,
    similar: $checkboxes[4].checked,
  };

  const generatePassword = (
    length,
    hasSymbols,
    hasNumbers,
    hasLowercase,
    hasUpperCase,
    hasSimilar
  ) => {
    const availableCharacters = [
      ...(hasSymbols ? symbols : []),
      ...(hasNumbers ? numbers : []),
      ...(hasLowercase ? lowerCaseLetters : []),
      ...(hasUpperCase ? upperCaseLetters : []),
      ...(hasUpperCase ? upperCaseLetters : []),
    ];
    let password = '';
    if (availableCharacters.length === 0) return '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * availableCharacters.length);
      password += availableCharacters[index];
    }
    $password.value = hasSimilar
      ? includeSimilarCharacters(password)
      : password;

    return password;
  };

  const includeSimilarCharacters = (password) => {
    let newPassword = '';
    for (let i = 0; i < password.length; i++) {
      const index = Math.floor(Math.random() * similarCharacters.length);
      newPassword += similarCharacters[index];
    }
    return newPassword;
  };

  $copyBtn.addEventListener('click', async () => {
    const inputValue = $password.value.trim();
    if (!inputValue) return;
    if (inputValue) {
      try {
        await navigator.clipboard.writeText(inputValue);
        $copyBtn.classList.toggle('copied');
      } catch (err) {}
    }
  });
  $length.addEventListener('change', (e) => {
    $lengthText.innerText = e.target.value;
    config.length = Number(e.target.value);
    generatePassword(...Object.values(config));
  });

  const init = () => {
    generatePassword(...Object.values(config));
  };

  $checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      config[e.target.id] = e.target.checked;
      generatePassword(...Object.values(config));
    });
  });

  init();
});

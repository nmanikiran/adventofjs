document.addEventListener('DOMContentLoaded', function () {
  const $cvv = document.querySelector('input[name="cvv"]');
  const $cardNumber = document.querySelector('input[name="card-number"]');
  const $creditCard = document.querySelector('.credit-card__wrapper');
  $cvv.addEventListener('click', (e) => {
    e.preventDefault();
    $creditCard.classList.add('flip');
  });
  $cvv.addEventListener('blur', (e) => {
    e.preventDefault();
    $creditCard.classList.remove('flip');
  });

  $cardNumber.addEventListener('input', (e) => {
    const { classList } = $creditCard;
    const mcls = Array.from(classList)[0];
    $creditCard.classList.remove(...$creditCard.classList);
    $creditCard.classList.add(mcls);

    const { value } = e.target;
    if (value.startsWith('3')) {
      $creditCard.classList.add('american');
    } else if (value.startsWith('4')) {
      $creditCard.classList.add('visa');
    } else if (value.startsWith('5')) {
      $creditCard.classList.add('mastercard');
    } else if (value.startsWith('6')) {
      $creditCard.classList.add('discover');
    }
  });
});

document.addEventListener('DOMContentLoaded', (e) => {
  const calculateEl = document.querySelector('#calculate');

  calculateEl.addEventListener('click', (e) => {
    const tipAmountEl = document.querySelector('#tip-amount');
    const totalPerPersonEl = document.querySelector('#total-per-person');

    const billAmount = document.querySelector('#bill-amount').value;
    const noofPeople = document.querySelector('#number-of-people').value;

    const tip = document.querySelector('input[name="tip"]:checked').value;
    const tipPercent = Number(tip.replace('%', '')) / 100;
    const newTip = Number(billAmount) * tipPercent;
    tipAmountEl.innerText = `${newTip.toFixed(2)}`;

    const perPerson = ((Number(billAmount) + newTip) / noofPeople).toFixed(2);
    totalPerPersonEl.innerText = `${perPerson}`;
  });
});

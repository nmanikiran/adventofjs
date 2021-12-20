document.addEventListener('DOMContentLoaded', (e) => {
  const input = document.querySelector('input');
  const dollars = document.querySelector('.dollars');
  input.addEventListener('input', (e) => {
    dollars.innerText = parseFloat(Number(e.target.value) / 100).toFixed(2);
  });
});

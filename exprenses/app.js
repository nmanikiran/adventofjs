document.addEventListener('DOMContentLoaded', () => {
  const $expenseTable = document.querySelector('.expense-table');
  const $addExpenses = document.querySelector('#add-expense-button');
  const $income = document.querySelector('.income .summary-amount');
  const $expenses = document.querySelector('.expenses .summary-amount');
  const $balance = document.querySelector('.balance .summary-amount');
  const formatNumner = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);

  const createExpense = ({ id, name: title, amount }) => {
    id = id || Date.now() + '';
    const expense = document.createElement('div');
    expense.classList.add('expense');

    const name = document.createElement('div');
    name.classList.add('expense__name');
    name.innerText = title;
    expense.appendChild(name);

    const price = document.createElement('div');
    price.classList.add('expense__price');
    price.innerText = `${formatNumner(amount)}`;
    expense.appendChild(price);

    const deleteEl = document.createElement('div');
    deleteEl.classList.add('delete');

    const button = document.createElement('button');
    button.classList.add('delete-expense');
    button.name = 'delete-expense';
    button.id = id;

    button.addEventListener('click', () => {
      button.closest('.expense').remove();
      let summary = localStorage.getItem('summary') || '{}';
      summary = JSON.parse(summary);
      summary.expenses = summary.expenses.filter((el) => el.id !== id);
      updateSummary(summary);
    });

    const img = document.createElement('img');
    img.src = './images/trash.svg';
    img.alt = 'Trash';
    button.appendChild(img);

    deleteEl.appendChild(button);
    expense.appendChild(deleteEl);
    return expense;
  };

  const updateSummary = (summary) => {
    const incomeAmount = Number(summary.income);
    const expensesAmount = summary?.expenses.reduce(
      (acc, curr) => acc + Number(curr.price),
      0
    );
    $income.innerText = `${formatNumner(incomeAmount)}`;
    $expenses.innerText = `${formatNumner(expensesAmount) || 0}`;
    $balance.innerText = `${formatNumner(incomeAmount - expensesAmount)}`;
    localStorage.setItem('summary', JSON.stringify(summary));
  };

  $addExpenses.addEventListener('click', () => {
    const $income = document.querySelector('#income');
    const $name = document.querySelector('#expense-name');
    const $amount = document.querySelector('#expense-amount');
    const name = $name.value;
    const amount = $amount.value;
    $expenseTable.appendChild(createExpense({ name, amount }));
    let summary = localStorage.getItem('summary') || '{}';
    summary = JSON.parse(summary);
    if (Object.keys(summary).length === 0) {
      summary = {
        income: $income.value,
        expenses: [{ title: name, price: amount }],
      };
    } else {
      summary.income = $income.value;
      summary.expenses.push({ title: name, price: amount });
    }
    updateSummary(summary);
  });

  let summary = localStorage.getItem('summary') || '{}';
  summary = JSON.parse(summary);
  if (summary) {
    updateSummary(summary);
    summary.expenses.forEach((expense) => {
      $expenseTable.appendChild(
        createExpense({
          id: expense.id,
          name: expense.title,
          amount: expense.price,
        })
      );
    });
  }
});

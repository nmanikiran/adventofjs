document.addEventListener('DOMContentLoaded', () => {
  const $wrapper = document.querySelector('.wrapper');
  const $previous = document.querySelector('.previous');
  const $next = document.querySelector('.next');
  const $month = document.querySelector('.month');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  let currentMonth = today.getMonth();
  let year = today.getFullYear();

  const removeDayElements = () => {
    const days = document.querySelectorAll('.day');
    days.forEach((day) => {
      $wrapper.removeChild(day);
    });
  };

  const createDay = (day) => {
    const div = document.createElement('div');
    div.classList.add('day');
    div.innerText = day;
    return div;
  };

  const renderDays = (days) => {
    const fragement = document.createDocumentFragment();
    days.forEach((day, index) => {
      fragement.appendChild(createDay(day, index));
    });
    $wrapper.appendChild(fragement);
  };

  const getDateInfo = (month) => {
    if (month >= 12) year = year + 1;
    currentMonth = Math.abs(month % 12);
    const firstDay = new Date(year, currentMonth, 1);
    $month.innerText = `${year} - ${months[currentMonth]}`;
    const lastDay = new Date(year, currentMonth + 1, 0);
    return { firstDay, lastDay };
  };

  const renderMonthCalendar = (month) => {
    const { firstDay, lastDay } = getDateInfo(month);
    let dates = new Array(42).fill(null);
    let firstDayIndex = firstDay.getDay();
    let daysInMonth = lastDay.getDate();
    dates.forEach((date, index) => {
      if (index >= firstDayIndex) {
        const previousDay = dates[index - 1];
        if (index < firstDayIndex + daysInMonth && previousDay < 31) {
          dates[index] = previousDay ? previousDay + 1 : 1;
        }
      }
    });
    // Remove extra empty days
    if (!(dates[35] || dates[36])) {
      dates = dates.slice(0, 34);
    }
    renderDays(dates);
  };

  $next.addEventListener('click', () => {
    removeDayElements();
    renderMonthCalendar(currentMonth + 1);
  });

  $previous.addEventListener('click', () => {
    removeDayElements();
    renderMonthCalendar(currentMonth - 1);
  });

  renderMonthCalendar(currentMonth);
});

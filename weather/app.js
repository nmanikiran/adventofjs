const daysOfWeekMap = {
  0: 'SUN',
  1: 'MON',
  2: 'TUES',
  3: 'WED',
  4: 'THUR',
  5: 'FRI',
  6: 'SAT',
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  'partly-cloudy': { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '0440001f98f935cc84bd054bdad09905';
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

import './style.css';

import { render } from './modules/scores.js';
import { sendData, getData, tbody } from './modules/methods.js';

//const tbody = document.querySelector('.tbody');
const addScoreBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh');
//tbody.innerHTML = render();
addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
  getData();
});

refreshBtn.addEventListener('click', () => {
  getData();
});

getData();
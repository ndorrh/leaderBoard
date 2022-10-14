import './style.css';
import { sendData, getData } from './modules/methods.js';

const addScoreBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh');

addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
  getData();
});

refreshBtn.addEventListener('click', () => {
  getData();
});

getData();
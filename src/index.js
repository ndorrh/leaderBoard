import './style.css';

import { render, users } from './modules/scores.js';

const tbody = document.querySelector('.tbody');
tbody.innerHTML = render();
console.log(users[3].score);
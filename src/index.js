import './style.css';

import { render } from './modules/scores.js';

const tbody = document.querySelector('.tbody');
tbody.innerHTML = render();

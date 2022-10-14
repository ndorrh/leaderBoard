import { render, tbody } from './scores.js';

const getData = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FEXtwxR2o0DuBnnmH5XG/scores')
    .then((rawData) => {
      if (!rawData.ok) {
        throw new Error('Network response was not OK');
      } else {
        console.log('Data retrieve successfully');
        return rawData.json();
      }
    })
    .then((playerData) => {
      tbody.innerHTML = render(playerData.result.sort((a, b) => b.score - a.score));
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};

const sendData = async () => {
  const playerName = document.getElementById('name');
  const playerScore = document.getElementById('score');
  const data = {
    user: `${playerName.value}`,
    score: playerScore.value,
  };

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FEXtwxR2o0DuBnnmH5XG/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('There is a problem with your send request');
    } else {
      return response.json();
    }
  })
    .then((success) => {
      console.log(success.result);
    });

  playerName.value = '';
  playerScore.value = '';

  await getData();
};

export { getData, sendData };
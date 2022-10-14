const tbody = document.querySelector('.tbody');
const tableOfScore = (arrOfScores, index, className) => {
  let tdata = '';
  tdata = `
                <tr class =${className}>
                 <td>${index + 1}</td>
                  <td>${arrOfScores[index].user}</td>
                  <td>${arrOfScores[index].score}</td>
                </tr>`;
  return tdata;
};
const render = (user) => {
  let score = '';
  user.forEach((player, index) => {
    if (index % 2 === 0) {
      score += tableOfScore(user, index, 'bg-white');
    } else {
      score += tableOfScore(user, index, 'bg-grey');
    }
  });

  return score;
};

export { render, tbody };
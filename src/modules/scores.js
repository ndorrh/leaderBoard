const users = [
  {
    id: 1,
    name: 'Player 1',
    score: 500
  },

  {
    id: 2,
    name: 'Player 2',
    score: 300
  },

  {
    id: 3,
    name: 'Player 3',
    score: 700
  },

  {
    id: 4,
    name: 'Player 4',
    score: 1100
  },

  {
    id: 5,
    name: 'Player 5 ',
    score: 60
  },

  {
    id: 6,
    name: 'Player 6 ',
    score: 6000
  },

  {
    id: 7,
    name: 'Player 7 ',
    score: 6000
  },
];

const render = () => {
  let tdata = '';
  users.forEach((player, index) => {
    tdata += `
                <tr>
                  <td>${users[index].id}</td>
                  <td>${users[index].name}:</td>
                  <td>${users[index].score}</td>
                </tr>`;
  });
  return tdata;
};

export { users, render };
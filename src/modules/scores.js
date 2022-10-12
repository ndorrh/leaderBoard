const tbody = document.querySelector('.tbody');
const render = (user) => {
  let tdata = '';
  user.forEach((player, index) => {
    tdata += `
                <tr>
                 <td>${index}:</td>
                  <td>${user[index].user}:</td>
                  <td>${user[index].score}</td>
                </tr>`;
  });
  return tdata;
};

export { render, tbody };
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'oswald',
  }),
}).then((good) => good.json()).then((err) => console.log(err));
console.log('rest');
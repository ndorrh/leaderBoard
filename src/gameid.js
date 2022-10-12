fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {

  // Adding method type
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // Adding body or contents to send
  body: JSON.stringify({
    name: 'oswald',
  }),
}).then((good) => good.json()).then((err) => console.log(err));
console.log('rest');
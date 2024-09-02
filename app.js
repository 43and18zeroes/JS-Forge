async function init() {
  let url = 'https://api.zippopotam.us/de/81241';
  let resp = await fetch(url);
  let json = await resp.json();
  document.write(`Country is ${json.country}`);
}

init();


fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

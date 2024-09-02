async function init() {
  let url = 'https://api.zippopotam.us/de/81241';
  let resp = await fetch(url);
  let json = await resp.json();
  document.write(`Country is ${json.country}`);
}

init();


fetch('https://api.example.com/data/1', {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('Resource deleted');
  })
  .catch(error => console.error('Error:', error));

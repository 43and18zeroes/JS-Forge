function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function fetchData(latitude, longitude) {
  const apiKey = 'd9425257f99d954ecdc16740272490d5';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.weather[0].description); // You can adjust this to get other weather details if needed
}

function displayData(weather) {
  console.log(weather);
}

function onError(err) {
  console.log(`ERROR: ${err.message}`);
}

getCoordinates()
  .then(position => {
    const { latitude, longitude } = position.coords;
    return fetchData(latitude, longitude);
  })
  .then(displayData)
  .catch(onError);

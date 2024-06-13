const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opts
    );
  });
  return promise;
};

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duraction);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Time done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

if ("geolocation" in navigator) {
  // Funktion zum Abrufen des aktuellen Standorts
  const getCurrentLocation = async () => {
    try {
      // Position abrufen
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Koordinaten des aktuellen Standorts
      let { latitude, longitude } = position.coords;

      // Koordinaten auf zwei Dezimalstellen kürzen
      latitude = Number(latitude.toFixed(0));
      longitude = Number(longitude.toFixed(0));

      // Standortinformationen in der Konsole ausgeben
      console.log("Aktueller Standort:");
      console.log(`Breitengrad: ${latitude}`);
      console.log(`Längengrad: ${longitude}`);
    } catch (error) {
      // Fehlerbehandlung
      console.error("Fehler beim Abrufen des Standorts: ", error.message);
    }
  };

  // Standort abrufen
  getCurrentLocation();
} else {
  console.error("Geolocation wird von diesem Browser nicht unterstützt.");
}

function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
      .then(response => response.json())
      .then(data => resolve(data.properties.periods[1].shortForecast));
  });
}

function displayData(weather) {
  console.log(weather);
}

function onError(err) {
  console.log(`ERROR: ${err}`);
}

fetchData()
  .then(displayData)
  .catch(onError)
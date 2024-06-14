let latitude, longitude;

if ('geolocation' in navigator) {
  // Funktion zum Abrufen des aktuellen Standorts
  const getCurrentLocation = async () => {
    try {
      // Position abrufen
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Koordinaten des aktuellen Standorts
      latitude = Number(position.coords.latitude.toFixed(0));
      longitude = Number(position.coords.longitude.toFixed(0));

      // Standortinformationen in der Konsole ausgeben
      console.log('Aktueller Standort:');
      console.log(`Breitengrad: ${latitude}`);
      console.log(`Längengrad: ${longitude}`);

      // Wetterdaten abrufen und anzeigen
      fetchData().then(displayData).catch(onError);
    } catch (error) {
      // Fehlerbehandlung
      console.error('Fehler beim Abrufen des Standorts: ', error.message);
    }
  };

  // Standort abrufen
  getCurrentLocation();
} else {
  console.error('Geolocation wird von diesem Browser nicht unterstützt.');
}

function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://api.weather.gov/gridpoints/OKX/${latitude},${longitude}/forecast`
    )
      .then(response => response.json())
      .then(data => resolve(data.properties.periods[1].shortForecast))
      .catch(error => reject(error));
  });
}

function displayData(weather) {
  console.log(weather);
}

function onError(err) {
  console.log(`ERROR: ${err}`);
}

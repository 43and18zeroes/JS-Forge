if ('geolocation' in navigator) {
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
        console.log('Aktueller Standort:');
        console.log(`Breitengrad: ${latitude}`);
        console.log(`Längengrad: ${longitude}`);
  
        // Wetterdaten abrufen und anzeigen
        fetchData(latitude, longitude).then(displayData).catch(onError);
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
  
  function fetchData(latitude, longitude) {
    console.log(latitude);
    const apiUrl = `https://api.weather.gov/gridpoints/OKX/35,35/forecast`;
    return new Promise(function (resolve, reject) {
      fetch(
        // `https://api.weather.gov/gridpoints/OKX/${latitude},${longitude}/forecast`
        // `https://api.weather.gov/gridpoints/OKX/35,35/forecast`
        apiUrl
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
  
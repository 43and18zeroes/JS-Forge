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
  
  function fetchData(lat, lon) {
    // console.log(`https://api.weather.gov/gridpoints/OKX/${latitude},${longitude}/forecast`);
    // console.log(`https://api.weather.gov/gridpoints/OKX/35,35/forecast`);
    // lat = 35;
    // lon = 35;
    const apiKey = 'd9425257f99d954ecdc16740272490d5';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    return new Promise(function (resolve, reject) {
      fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.json();
    })
    .then(weatherData => {
        // Wetterdaten ausgeben
        console.log('Ort:', weatherData.name);
        console.log('Temperatur:', weatherData.main.temp, '°C');
        console.log('Wetter:', weatherData.weather[0].description);
        console.log('Luftfeuchtigkeit:', weatherData.main.humidity, '%');
        console.log('Windgeschwindigkeit:', weatherData.wind.speed, 'm/s');
    })
    .catch(error => {
        console.error('Es gab ein Problem mit der Fetch-Operation:', error);
    });
    });
  }
  
  function displayData(weather) {
    console.log(weather);
  }
  
  function onError(err) {
    console.log(`ERROR: ${err}`);
  }
  
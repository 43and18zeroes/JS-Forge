// It takes a couple a bit of time to log the result. The eventlistener can’t be fired until the loop is complete.
// Single-Threading in action: The eventlistener is blocked until the operations in the loop are done.

const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, duraction);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler); // Callback Function

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// Erstellen eines neuen Promises
const myPromise = new Promise((resolve, reject) => {
  // Eine asynchrone Operation simulieren (z.B. einen Datenabruf)
  setTimeout(() => {
    const success = true; // Simuliere, dass die Operation erfolgreich war

    if (success) {
      resolve('Daten erfolgreich abgerufen!'); // Versprechen erfüllt
    } else {
      reject('Fehler beim Abrufen der Daten.'); // Versprechen abgelehnt
    }
  }, 2000); // Warte 2 Sekunden, um die asynchrone Operation zu simulieren
});

// Verwenden des Promises
myPromise
  .then(message => {
    // Dieser Block wird ausgeführt, wenn das Promise erfüllt wurde
    console.log(message); // Ausgabe: "Daten erfolgreich abgerufen!"
  })
  .catch(error => {
    // Dieser Block wird ausgeführt, wenn das Promise abgelehnt wurde
    console.error(error); // Ausgabe im Falle eines Fehlers: "Fehler beim Abrufen der Daten."
  });

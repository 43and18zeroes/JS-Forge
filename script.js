const socket = new WebSocket('ws://example.com/socket');

socket.onmessage = function(event) {
  console.log('Nachricht empfangen:', event.data);
};

socket.onopen = function(event) {
  socket.send('Hallo Server!');
};
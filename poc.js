const WebSocket = require('ws');

// Connect to a WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    console.log('Connected to the server');

    // Send a message to the server once connected
    ws.send('Hello Server!');
});

ws.on('message', function incoming(data) {
    console.log('Received from server:', data);
});

ws.on('close', function close() {
    console.log('Disconnected from the server');
});

// Handling errors
ws.on('error', function error(error) {
    console.error('WebSocket error:', error);
});

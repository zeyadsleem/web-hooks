const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:4002');

ws.on('message', (data) => {
    const { status } = JSON.parse(data);
    console.log(`[${new Date().toISOString()}] Status: ${status}`);
});

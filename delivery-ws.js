const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4002 });
let status = 'pending';

wss.on('connection', (ws) => ws.send(JSON.stringify({ status })));

setTimeout(() => {
    status = 'deliverd';
    wss.clients.forEach((client) => client.send(JSON.stringify({ status: 'deliverd' })));
}, 30000);

console.log('WebSocket server on 4002');

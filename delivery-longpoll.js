const express = require('express');

const app = express();
let orderStatus = 'pending';
let waitingClient = null;

app.get('/subscribe', (req, res) => {
    if (orderStatus !== 'pending') {
        res.json({ status: orderStatus });
    } else {
        waitingClient = res;
        console.log('Client is waiting...');

        setTimeout(() => {
            // orderStatus = 'dlivered';
            if (waitingClient) {
                waitingClient.json({ status: 'dlivered' });
                console.log('Response sent to client.');
                waitingClient = null;
            }
        }, 10000);
    }
});

app.listen(4001, () => console.log('Long Poll server on 4001'));

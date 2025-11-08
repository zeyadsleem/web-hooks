const express = require('express');

const app = express();
let orderStatus = 'pending';

app.get('/status', (req, res) => {
    console.log('Polling request received');
    res.json({ status: orderStatus });
});

setTimeout(() => {
    orderStatus = 'delivered';
    console.log('Status updated to: delivered');
}, 30000);

app.listen(4000, () => console.log('Delivery server on 4000'));

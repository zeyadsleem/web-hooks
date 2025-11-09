const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

const app = express();

const WEBHOOK_URL = 'http://localhost:3000/webhook';
const SECRET = 'my-secret-123';

function signPayload(payload, secret) {
    return crypto.createHmac('sha256', secret).update(JSON.stringify(payload)).digest('hex');
}

app.get('/trigger', async (req, res) => {
    const payload = { status: 'delivered' };
    const signature = signPayload(payload, SECRET);

    await axios.post(WEBHOOK_URL, payload, {
        headers: { 'x-signature': signature },
    });

    res.send('Webhook sent');
});

app.listen(4003, () => console.log('Trigger webhook: GET http://localhost:4003/trigger'));

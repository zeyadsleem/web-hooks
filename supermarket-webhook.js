const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

const SECRET = 'my-secret-key-123';

function verifySignature(body, signature, secret) {
    const hash = crypto.createHmac('sha256', secret).update(JSON.stringify(body)).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(signature));
}

app.post('/webhook', (req, res) => {
    const signature = req.headers['x-signature'];

    if (!verifySignature(req.body, signature, SECRET)) {
        return res.status(401).send('Invalid signature');
    }

    const { status } = req.body;
    console.log(`[${new Date().toISOString()}] WEBHOOK: Status updated to ${status}`);

    res.status(200).send('ok');
});

app.listen(3000, () => console.log('Webhook endpoint: http://localhost:3000/webhook'));

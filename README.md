# Supermarket Polling Example

This project demonstrates short polling implementation using Node.js and Express.

## Files

- `delivery-server.js` - Server that responds with delivery status
- `supermarket-polling.js` - Client that polls every 10 seconds

## Usage

Install dependencies:

```bash
npm install
```

Run the example:

```bash
# Terminal 1
node delivery-server.js

# Terminal 2
node supermarket-polling.js
```

## How It Works

The client sends a request every 10 seconds to check if the delivery status has changed. The server responds immediately with the current status.

## Observation

In 60 seconds, the client makes 6 requests, even if the status only changes once.

## Notes

This is a learning project to understand polling techniques.

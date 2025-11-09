# Supermarket Polling Example

This project demonstrates short polling and long polling implementations using Node.js and Express.

## Files

- `delivery-server.js` - Server that responds with delivery status
- `supermarket-polling.js` - Client that polls every 10 seconds (short polling)
- `delivery-longpoll.js` - Server that holds the request until update is ready
- `supermarket-longpoll.js` - Client that waits for response (long polling)

## Usage

Install dependencies:

```bash
npm install
```

Run short polling:

```bash
# Terminal 1
node delivery-server.js

# Terminal 2
node supermarket-polling.js
```

Run long polling:

```bash
# Terminal 1
node delivery-longpoll.js

# Terminal 2
node supermarket-longpoll.js
```

## How It Works

**Short Polling**: Client sends a request every 10 seconds. Server responds immediately with current status.

**Long Polling**: Client sends a request and waits. Server holds the request open until status changes, then responds.

## Observation

**Short Polling**: In 60 seconds, makes 6 requests even if status changes only once.

**Long Polling**: Makes 1 request that waits until the status changes (10 seconds in this example).

## Notes

This is a learning project to understand polling techniques.

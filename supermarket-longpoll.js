async function subscribe() {
    const res = await fetch('http://localhost:4001/subscribe');
    const data = await res.json();
    console.log(`[${new Date().toISOString()}] Status: ${data.status}`);
    subscribe();
}

subscribe();

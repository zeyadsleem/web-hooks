async function poll() {
    const res = await fetch('http://localhost:4000/status');
    const data = await res.json();
    console.log(`[${new Date().toISOString()}] Status: ${data.status}`);
    setTimeout(poll, 10000);
}

poll();

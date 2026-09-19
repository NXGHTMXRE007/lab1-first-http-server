const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
   next();
});

app.get('/', (req, res) => {
    res.send('123');
});

app.get('/api/tickets', (req, res) => {
    res.json([
        { id: 1, type: "VIP", price: 5000 },
        { id: 2, type: "Standard", price: 1500 }
    ]);
});

app.get('/api/events', (req, res) => {
    res.json([
        { id: 101, name: "Concert", date: "2026-10-01" },
        { id: 102, name: "Theater Play", date: "2026-11-15" }
    ]);
});

app.get('/api/tickets/:id', (req, res) => {
    res.json({ 
        requestedId: req.params.id, 
        status: "success",
        message: "Информация о билете"
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});
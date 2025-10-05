const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API endpoint to get a session ID
app.post('/api/session', (req, res) => {
    // Generate a random session ID (UUID-like)
    const sessionId = 'sess-' + Math.random().toString(36).substr(2, 9)
        + '-' + Date.now();
    res.json({
        sessionId,
        owner: 'Arnold Chirchir',
        companyEmail: 'arnolkipruto193@gmail.com'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
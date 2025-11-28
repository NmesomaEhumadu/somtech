// server.js - Minimal Express backend for somtech project
// Serves static files from Vite build output and provides a simple API.

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory (../dist)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(staticPath));

// In-memory storage for messages (will reset on server restart)
let messages = [
    {
        id: 1,
        title: 'New Inquiry: E-Commerce Project',
        message: 'From: Sarah Jenkins (sarah@example.com) - "I need a store like Lost Oak Farm for my boutique."',
        link: 'mailto:sarah@example.com'
    },
    {
        id: 2,
        title: 'New Inquiry: Portfolio Update',
        message: 'From: Mike Ross (mike@example.com) - "Can you update my existing portfolio to use React?"',
        link: 'mailto:mike@example.com'
    }
];

// GET endpoint: Fetch all messages
app.get('/api/notifications', (req, res) => {
    res.json(messages);
});

// POST endpoint: Receive new contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newMessage = {
        id: Date.now(), // simple unique ID
        title: `New Message from ${name}`,
        message: `From: ${name} (${email}) - Phone: ${phone || 'N/A'} - "${message}"`,
        link: `mailto:${email}`
    };

    // Add to the beginning of the array
    messages.unshift(newMessage);

    console.log('New message received:', newMessage);
    res.status(201).json({ success: true, message: 'Message received' });
});

// Simple API endpoint returning the frontend URL
app.get('/api/info', (req, res) => {
    res.json({ message: 'Backend is running', port: PORT });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Backend listening on http://localhost:${PORT}`);
});

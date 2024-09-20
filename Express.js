import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', (req, res) => {
    // Save client to database (to be implemented)
    res.sendFile('/views/index.html', {root: __dirname});
});




mongoose
.connect('mongodb+srv://Kh2x1:2tq693bqRrssHAeV@cluster0.ymwfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(3000, () => {
        console.log(`Server running on http://localhost:${port}`);
    }); })
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});







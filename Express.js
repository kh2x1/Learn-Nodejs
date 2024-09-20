import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', (req, res) => {
    // Save client to database (to be implemented)
    res.sendFile('/views/index.html', {root: __dirname});
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`);
});










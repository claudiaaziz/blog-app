const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();

const PORT = 5010;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {});

app.post('/api/create', (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const body = req.body.body;

    db.query(
        'INSERT INTO Posts (username, title, body) VALUES (?,?,?)',
        [username, title, body],
        (err, result) => {
            if (err) console.log(err);
            else console.log(result);
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

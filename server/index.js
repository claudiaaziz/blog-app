const express = require('express');
const db = require('./config/db');
const app = express();

const PORT = 5010;

app.get('/', (req, res) => {});

app.post('api/create', (req, res) => {
    db.query(
        "INSERT INTO Posts (title, body, username) VALUES ()", (err, result) => {
            if (err) console.log(err)
            else console.log(result)
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

const express = require('express');
const app = express();

const PORT = 5010;

app.get('/', (req, res) => {
    res.send('testingg');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

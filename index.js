const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: "Hello Praveen" });
})

app.listen(3000, () => {
    console.log('server running on port 3000');
})
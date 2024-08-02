const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Ex 1!');
})

app.get('/:portName', (req, res) => {
    return res.send(`<h1>${req.params.portName}</h1>`);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
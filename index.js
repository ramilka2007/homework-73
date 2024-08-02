const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;
const password = 'password';
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Homework');
});

app.get('/:portName', (req, res) => {
    return res.send(`<h1>${req.params.portName}</h1>`);
});

app.get('/encode/:code', (req, res) => {
    return res.send(Vigenere.Cipher(password).crypt(req.params.code));
});

app.get('/decode/:code', (req, res) => {
    return res.send(Vigenere.Decipher(password).crypt(req.params.code));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
'use strict'

const express = require('express')
const PORT = 8000
const HOST = "0.0.0.0";
const app = express()

// Route root
app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

// Route /me
app.get('/me', (req, res) => {
    res.send('Rizky Cahyono Putra\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

const express = require('express')
const app = express()
const players = require('./routes/players.js')

app.get('/', (req, res) => {
   res.send('Hello World!');
})

app.use('/players', players)

module.exports = app

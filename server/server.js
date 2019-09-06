require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const addCharCtrl = require('./controllers/addCharCtrl')

app.use(express.json())

app.get('/api/char-portrait/:id', addCharCtrl.getCharImg)
app.get('/api/team/:id', addCharCtrl.getCharImg)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} characters on Smash?!`))
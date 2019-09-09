require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const addCharCtrl = require('./controllers/addCharCtrl')
const fullCharCtrl = require('./controllers/fullCharCtrl')
const statCtrl = require('./controllers/statCtrl')
const teamCtrl = require('./controllers/teamCtrl')

app.use(express.json())

app.get('/api/char-portrait/:id', addCharCtrl.getCharImg) // This pulls the image from data to show you the portrait
app.get('/api/char/:id', addCharCtrl.getChar) // This is pulling all the info and sending it as JSON about a character
app.post('/api/team/', teamCtrl.addToTeam) // This is attaching that info to the addToTeam function (which is a button)
app.get('/api/team', teamCtrl.showTeam) // Once that button is pressed, then this displays all the info about the character
app.delete('/api/team/:id', teamCtrl.deleteTeam)
app.get('/api/team/:id', fullCharCtrl.getFullChar)
app.get('/api/stats/wins', statCtrl.getWinNum) // Keep the state if page is refreshed
app.get('/api/stats/losses', statCtrl.getLossNum) // ""
app.get('/api/stats/stat1', statCtrl.getStat1Num) // ""
app.get('/api/stats/stat2', statCtrl.getStat2Num) // ""
app.put('/api/wins/:wins', statCtrl.updateWins) // Takes the input and displays it on wins
app.put('/api/losses/:losses', statCtrl.updateLosses) // Takes the input and displays it on losses
app.put('/api/stat1/:stat1', statCtrl.updateStat1) // Takes the input and displays it on stat1
app.put('/api/stat2/:stat2', statCtrl.updateStat2) // Takes the input and displays it on stat2


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} characters on Smash?!`))
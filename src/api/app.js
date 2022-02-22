const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const cards = require('../controllers/cards')

app.use('/flashcards', cards)

module.exports = app

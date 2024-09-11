const express = require('express')
const app = express()
const PORT = 5000

// Imported Data
const peopleData = require('./data/people')

// Set the view engine to ejs
app.set('view engine', 'ejs')
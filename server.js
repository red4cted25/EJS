var express = require('express')
var app = express()
const PORT = 5000

// Imported Data
const peopleData = require('./data/people')

// Set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

app.get('/', (req, res) => {
    let judgement = "Nerds will inherit the earth"
    res.render('pages/index', {
        people: peopleData,
        tagline: judgement,
    })
})

// about page
app.get('/about', (req, res) => {
    res.render('pages/about', {
        people: peopleData,
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
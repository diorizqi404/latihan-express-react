const express = require('express') // import express
const cors = require('cors') // import cors
const bodyParser = require('body-parser') // import body-parser
const router = require('./routes') // import router
require('dotenv').config() // import dotenv

// init app
const app = express()

app.use(cors()) // use cors
app.use(bodyParser.urlencoded({extended: false})) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

//define port
const port = process.env.PORT
const environment = process.env.NODE_ENV
const host = environment === 'development' ? 'localhost' : '0.0.0.0'

//route
app.get('/', (req, res) => {
    res.send("Hello World! This is a simple REST API using Node.js, Express.js, and MySQL. ☁️")
})

app.use('/api', router)

//start server
app.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
})
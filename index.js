const express = require('express') // import express
const cors = require('cors') // import cors
const bodyParser = require('body-parser') // import body-parser

// init app
const app = express()

app.use(cors()) // use cors
app.use(bodyParser.urlencoded({extended: false})) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

//define port
const port = 3000

//route
app.get('/', (req, res) => {
    res.send("hello world")
})

//start server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
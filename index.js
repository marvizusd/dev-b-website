const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

app.use(morgan('dev'))
app.use(bodyParser.json())


app.get('/', (req,res) => res.render('index'))

app.listen(4000, null, () => console.log('Listening on http://localhost:4000'))
const express = require('express');
const webhookRouter = require('./src/apis');
const app = express()
require('dotenv').config()
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'))

app.get('/', (req, res) => {
  res.send('hello from simple server :)')
})

app.use('/webhook', webhookRouter)


module.exports = app
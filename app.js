const express = require('express');
const webhookRouter = require('./src/apis');
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello from simple server :)')
})

app.use('/webhook', webhookRouter)


module.exports = app
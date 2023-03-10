const express = require('express');
const webhookRouter = require('./src/apis');
const app = express()
require('dotenv').config()
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.use(express.static(__dirname + '/src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views')

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.use('/webhook', webhookRouter)

app.use((req, res, next) => {
  res.redirect('/')
})
module.exports = app
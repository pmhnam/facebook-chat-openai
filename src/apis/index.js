const webhookController = require('../controllers/index')
const express = require('express')

const webhookRouter = express.Router()

webhookRouter.get('/', webhookController.getWebhook)
webhookRouter.post('/', webhookController.postWebhook)
webhookRouter.post('/chat', webhookController.postMessage)

module.exports = webhookRouter
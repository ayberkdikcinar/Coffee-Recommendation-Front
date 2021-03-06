const express = require('express');
const mainRouter = express.Router();
const mainController = require('./main.controller')

mainRouter.get('/', mainController.renderPage);
mainRouter.post('/', mainController.getClosestCoffees);

module.exports = mainRouter
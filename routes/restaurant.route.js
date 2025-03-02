const express = require('express');
const restaurantRouter = express.Router();
const { getTop5Items } = require('../controllers/restaurant.controller.js')

// Fetch top 5 menu items from nearest restaurants
restaurantRouter.get('/top-items', getTop5Items);

module.exports = restaurantRouter;
const express = require('express');
const route = express.Router();
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')
const MatchController = require('./controllers/MatchController')

route.get('/devs', DevController.index)
route.post('/devs', DevController.store)
route.post('/devs/:devId/likes', LikeController.store)
route.post('/devs/:devId/dislikes', DislikeController.store)
route.get('/devs/matchs', MatchController.index)

module.exports = route;
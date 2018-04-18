const express = require('express');
const router = express.Router();
const Game = require('./model/Gameschema');
const hbs = require('hbs');

router.get('/games', (req, res) => {
  Game.find({})
    .then(games => {
      res.render('game/gameindex', { games });
    })
    .catch(err => console.log(err));
});

module.export = router;

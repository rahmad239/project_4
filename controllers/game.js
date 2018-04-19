const express = require('express');
const router = express.Router();
const Game = require('../model/Game');
const hbs = require('hbs');

router.get('/games', (req, res) => {
  Game.find({})
    .then(games => {
      res.render('game/gameindex', { games });
    })
    .catch(err => console.log(err));
});

//go get the form for new topic it HAS TO GO BEFORE EDIT!
router.get('/new', (req, res) => {
  res.render('game/gamenew');
});

router.get('/:id', (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then(games => {
      res.render('game/gameshow', games);
    })
    .catch(err => console.log(err));
});

module.exports = router;

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

// edit
router.get('/edit', (req, res) => {
  res.render('game/gameedit');
});

//post to "/" regular route for browser
router.post('/', (req, res) => {
  Game.create({
    name: req.body.name,
    category: req.body.category,
    topic: req.body.topic,
    url: req.body.url,
    screenshot: req.body.screenshot
  })
    .then(games => {
      res.redirect('/games');
    })
    .catch(err => console.log(err));
});

//show each
router.get('/:id', (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then(games => {
      res.render('game/gameshow', games);
    })
    .catch(err => console.log(err));
});

// edit post
router.get('/edit/:id', (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then(games => {
      res.render('game/gameedit', games);
    })
    .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
  Game.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      category: req.body.category,
      topic: req.body.topic,
      url: req.body.url,
      screenshot: req.body.screenshot
    },
    {
      new: true
    }
  ).then(games => {
    res.redirect('/games');
  });
});

// delete
router.delete('/:id', (req, res) => {
  Game.findOneAndRemove({ _id: req.params.id })
    .then(games => {
      res.redirect('/games');
    })
    .catch(err => console.log(err));
});

module.exports = router;

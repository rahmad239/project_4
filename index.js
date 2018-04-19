// // require all of our dependencies

const Topic = require('./model/Topic');
const Game = require('./model/Game');
const gameControlCenter = require('./controllers/game');

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('view engine', 'hbs');

// app.use('/games', gameControlCenter);

// // app.use('/topics', topicConctrolCenter);

//define our routes including rendering index view

app.get('/', (req, res) => {
  res.render('mainindex');
});

app.get('/games', (request, response) => {
  Game.find({}).then(function(games) {
    response.render('./game/gameindex', { games });
  });
});
//the render method should call the location of the view in relation
//to where you are and the item it is going to render. this is
//also referenced in the controller

app.get('/topics', (req, res) => {
  Topic.find({}).then(function(topics) {
    res.render('./topic/topicindex', { topics });
  });
});
// app.get('/games', (req, res) => {
//   Game.find({}).then(games) => {
//   res.render('gameindex',{ games });
// });

// app.get('/', (request, response) => {
//   response.send('Hello VIRGIN ISLANDS!!!!!');
// });

// app.get('/:name', (req, res) => {
//   res.send(`hello ${req.params.name}`);
// });

app.listen(3400, () => {
  console.log('what up your getting connected');
});

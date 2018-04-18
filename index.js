// // require all of our dependencies
const Topic = require('./model/Topicschema');
const Game = require('./model/Gameschema');
const gameControlCenter = require('./controllers/game');
// const topicConctrolCenter = require('./controllers/topic');
// // const methodOverride = require("method-override");
// const path = require('path');
// // create and set up our express app
// // configure it all to use hbs

// app.get('/', (req, res) => {
//   LearnTask.find({}).then(function(task) {
//     res.render('index', { places });
//   });
// });

const express = require('express');
const app = express();
const hbs = require('hbs');

app.use('/games', gameControlCenter);
// app.use('/topics', topicConctrolCenter);
app.set('view engine', 'hbs');

//define our routes including rendering index view

app.get('/', (req, res) => {
  res.render('mainindex');
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

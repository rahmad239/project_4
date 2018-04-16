// // require all of our dependencies
// const express = require('express');
// const app = express();
// const LearnTopic = require('./models/LearnTopic');
// // const Controller = require("./controller/location");
// // const methodOverride = require("method-override");
// // const path = require("path");
// // create and set up our express app
// // configure it all to use hbs
// //define our routes including rendering index view

// app.get('/', (req, res) => {
//   LearnTask.find({}).then(function(task) {
//     res.render('index', { places });
//   });
// });

const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  response.send('Hello VIRGIN ISLANDS!!!!!');
});

app.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.listen(3400, () => {
  console.log('what up your getting connected');
});

// point to the seeds.json file here.
const Topic = require('../model/Topic');
const tdata = require('./tseeds.json');

const Game = require('../model/Game');
const gdata = require('./gseeds.json');
//change this to reflect the models

Topic.remove({})
  .then(() => {
    return Topic.collection.insert({ tdata });
  })
  .then(() => {
    process.exit();
  });

Game.remove({})
  .then(() => {
    return Game.collection.insert({ gdata });
  })
  .then(() => {
    process.exit();
  });

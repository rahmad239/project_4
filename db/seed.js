// point to the seeds.json file here.
const tdata = require('./tseeds.json');
const Topic = require('../models/TopicSchema');
const Game = require('../models/GameSchema');
const gdata = require('./gseeds.json');
//change this to reflect the models

Topic.remove({})
  .then(() => {
    return Topic.collection.insert(tdata);
  })
  .then(() => {
    process.exit();
  });

Game.remove({})
  .then(() => {
    return Game.collection.insert(gdata);
  })
  .then(() => {
    process.exit();
  });

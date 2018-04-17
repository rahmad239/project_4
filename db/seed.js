// point to the seeds.json file here.
const LTData = require('./ltseeds.json');
const LearnTopic = require('../models/LearnTopic');
const Game = require('../models/GameSchema');
const GData = require('./gseeds.json');
//change this to reflect the models

LearnTopic.remove({})
  .then(() => {
    return LearnTopic.collection.insert(LTData);
  })
  .then(() => {
    process.exit();
  });

Game.remove({})
  .then(() => {
    return Game.collection.insert(GData);
  })
  .then(() => {
    process.exit();
  });

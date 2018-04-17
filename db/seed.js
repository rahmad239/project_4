// point to the seeds.json file here.
const LTData = require('./ltseeds.json');
const LearnTopic = require('../models/LearnTopic');
//change this to reflect the models
LearnTopic.remove({})
  .then(() => {
    return LearnTopic.collection.insert(LTData);
  })
  .then(() => {
    process.exit();
  });

const GData = require('./gseeds.json');
const Game = require('../models/LearnTopic');

Game.remove({})
  .then(() => {
    return Game.collection.insert(GData);
  })
  .then(() => {
    process.exit();
  });

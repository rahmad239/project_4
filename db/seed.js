// point to the seeds.json file here.
const LTData = require('./seeds.json');
const LearnTopic = require('../models/LearnTopic');
//change this to reflect the models
LearnTopic.remove({})
  .then(() => {
    return LearnTopic.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });

// point to the seeds.json file here.
const Topic = require('../model/Topic');
// const tdata = require('./tseeds.json');

const Game = require('../model/Game');
// const gdata = require('./gseeds.json');
//change this to reflect the models

// Topic.remove({})
//   .then(() => {
//     return Topic.collection.insert({ tdata });
//   })
//   .then(() => {
//     process.exit();
//   });

// Game.remove({})
//   .then(() => {
//     return Game.collection.insert({ gdata });
//   })
//   .then(() => {
//     process.exit();
//   });
Game.remove({}).then(() => {
  Promise.all([
    Game.create({
      name: 'Flexbox Froggy',
      category: 'Style-Sheet Language',
      topic: 'CSS',
      url: 'http://flexboxfroggy.com',
      screenshot: 'ImageData.'
    }),
    Game.create({
      name: 'Try Ruby',
      category: 'Programming Language',
      topic: 'Ruby',
      url: 'http://tryruby.org/levels/1/challenges',
      screenshot: 'ImageData.'
    })
  ]).then(() => {
    console.log('games done');
    process.exit();
  });
});

Topic.remove({}).then(() => {
  Promise.all([
    Topic.create({
      title: 'This is the first fake title',
      category: 'Database',
      summary: 'this is the first fake summery',
      resource: 'this is the first fake resource',
      links: 'www.goodle.com',
      terms: 'this is the first fake concepts',
      notes: 'Just a fake note',
      games: 'GameSchema'
    }),
    Topic.create({
      title: 'This is the second fake title',
      category: 'Database',
      summary: 'this is the second fake summery',
      resource: 'this is the second fake resource',
      links: 'www.goodle.com',
      terms: 'this is the second fake concepts',
      notes: 'Just a fake note',
      games: 'GameSchema'
    })
  ]).then(() => {
    console.log('topics done');
    process.exit();
  });
});

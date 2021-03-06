// export the model
const mongoose = require('../db/connection');

const GameSchema = new mongoose.Schema({
  name: String,
  category: String,
  topic: String,
  url: String
  // screenshot: String
});

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;

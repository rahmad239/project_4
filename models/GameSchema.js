const mongoose = require('../db/connection');

const GamePlatformSchema = new mongoose.Schema({
  name: String,
  catagory: String,
  topic: String,
  url: String,
  screenshot: String
});

const Game = mongoose.model('Game', GamePlatformSchema);
module.exports = Game;

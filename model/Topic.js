const mongoose = require('../db/connection');

const TopicSchema = new mongoose.Schema({
  title: String,
  catagory: String,
  summary: String,
  resources: String,
  links: String,
  terms: String,
  notes: String
});

const Topic = mongoose.model('Topic', TopicSchema);
module.exports = Topic;

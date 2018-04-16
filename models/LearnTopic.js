const mongoose = require('../db/connection');
const LearnTopicSchema = new mongoose.Schema({
  title: String,
  catagory: String,
  summary: String,
  resources: String,
  links: String,
  terms: String,
  notes: String
});

const LearnTopic = mongoose.model('LearnTopic', LearnTopicSchema);
module.exports = LearnTopic;

// const UserLanding page
// //name, learn topics list, games list, notes box

// LearnTopic
// title of the topic, summery of what it is, resource links, concepts,
// add to topics function
// delete topic funtion

// games list:
// const game que
// //  title, link, Topic (sort by topic?)
//  add to que option

// const game view
// //with title, link, topic, brief explanation

// Terms:

const express = require('express');
const router = express.Router();
const Topic = require('../model/Topic');
const hbs = require('hbs');

module.exports = router;

router.get('/topics', (req, res) => {
  Topic.find({})
    .then(topics => {
      res.render('topic/topicindex', { topics });
    })
    .catch(err => console.log(err));
});

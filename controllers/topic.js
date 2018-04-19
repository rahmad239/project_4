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

router.get('/:id', (req, res) => {
  Topic.findOne({ _id: req.params.id })
    .then(topics => {
      res.render('topic/topicshow', topics);
    })
    .catch(err => console.log(err));
});

//these routes should lead to the exact view path folder

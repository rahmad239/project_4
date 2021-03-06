const express = require('express');
const router = express.Router();
const Topic = require('../model/Topic');
const hbs = require('hbs');

router.get('/topics', (req, res) => {
  Topic.find({})
    .then(topics => {
      res.render('topic/topicindex', { topics });
    })
    .catch(err => console.log(err));
});

//go get the form for new topic
router.get('/new', (req, res) => {
  res.render('topic/topicnew');
});

router.get('/:id', (req, res) => {
  Topic.findOne({ _id: req.params.id })
    .then(topics => {
      res.render('topic/topicshow', topics);
    })
    .catch(err => console.log(err));
});

//call edit into a path
router.get('/edit', (req, res) => {
  res.render('topic/topicedit');
});

//new post processing
router.post('/', (req, res) => {
  Topic.create({
    title: req.body.title,
    catagory: req.body.catagory,
    summary: req.body.summary,
    resources: req.body.resources,
    links: req.body.links,
    terms: req.body.terms,
    notes: req.body.notes
  })
    .then(topics => {
      res.redirect('/topics');
    })
    .catch(err => console.log(err));
});

// edit post
router.get('/edit/:id', (req, res) => {
  Topic.findOne({ _id: req.params.id })
    .then(topics => {
      res.render('topic/topicedit', topics);
    })
    .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
  Topic.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      catagory: req.body.catagory,
      summary: req.body.summary,
      resources: req.body.resources,
      links: req.body.links,
      terms: req.body.terms,
      notes: req.body.notes
    },
    {
      new: true
    }
  ).then(topics => {
    res.redirect('/topics');
  });
});

// delete
router.delete('/:id', (req, res) => {
  Topic.findOneAndRemove({ _id: req.params.id })
    .then(topics => {
      res.redirect('/topics');
    })
    .catch(err => console.log(err));
});

module.exports = router;
//these routes should lead to the exact view path folder

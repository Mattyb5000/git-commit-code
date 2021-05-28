const db = require("../models");

// Defining methods for the projectsController-ST
module.exports = {
    find: function(req, res) {
      console.log('you are in api find all project route');
      db.Project.find({})
        .sort({ date: -1 })
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
      console.log('you are in api findById project route');
      db.Project
        .findById(req.params.id)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log('you are in api create project route');
      db.Project
        .create(req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      console.log('you are in api update project route');
      db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      console.log('you are in api remove project route');
      db.Project
        .findById({ _id: req.params.id })
        .then(dbProject => dbProject.remove())
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    }
  };
const db = require("../models");

// Defining methods for the projectsController-ST
module.exports = {
    findAll: function(req, res) {
      db.Project
        .find(req.query)
        .sort({ date: -1 })
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Project
        .findById(req.params.id)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Project
        .create(req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Project
        .findById({ _id: req.params.id })
        .then(dbProject => dbProject.remove())
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    }
  };
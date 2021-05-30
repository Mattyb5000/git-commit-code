const db = require("../models");

// Defining methods for the projectFormController
module.exports = {
  find: function(req, res) {
    db.ProjectForm
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProjectForm => res.json(dbProjectForm))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.ProjectForm
      .findById(req.params.id)
      .then(dbProjectForm => res.json(dbProjectForm))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.ProjectForm
      .create(req.body)
      .then(dbProjectForm => res.json(dbProjectForm))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.ProjectForm
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProjectForm => res.json(dbProjectForm))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.ProjectForm
      .findById({ _id: req.params.id })
      .then(dbProjectForm => dbProjectForm.remove())
      .then(dbProjectForm => res.json(dbProjectForm))
      .catch(err => res.status(422).json(err));
  }
};
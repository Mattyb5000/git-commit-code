const db = require("../models");

// Defining methods for the projectFormController
module.exports = {
  find: function(req, res) {
    db.projectForm
      .find(req.query)
      .sort({ date: -1 })
      .then(dbprojectForm => res.json(dbprojectForm))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.projectForm
      .findById(req.params.id)
      .then(dbprojectForm => res.json(dbprojectForm))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.projectForm
      .create(req.body)
      .then(dbprojectForm => res.json(dbprojectForm))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.projectForm
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbprojectForm => res.json(dbprojectForm))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.projectForm
      .findById({ _id: req.params.id })
      .then(dbprojectForm => dbprojectForm.remove())
      .then(dbprojectForm => res.json(dbprojectForm))
      .catch(err => res.status(422).json(err));
  }
};
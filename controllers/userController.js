const axios = require("axios");
const db = require("../models");

// Defining methods for the userController

// findAll searches the user projects API and returns only the entries we haven't already saved

// It also makes sure that the projects returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
    //TODO: add MongodbURL for Projects API-ST
      .get("TODO", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
          //TODO: determine what items we want to display
        )
      )
      .then(apiProjects =>
        db.Project.find().then(dbProjects =>
          apiprojects.filter(apiProject =>
            dbprojects.every(dbProject => dbProject.userId.toString() !== apiProject.id)
          )
        )
      )
      .then(projects => res.json(projects))
      .catch(err => res.status(422).json(err));
  }
};
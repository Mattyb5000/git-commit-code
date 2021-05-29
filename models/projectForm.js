const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectFormSchema = new Schema({
  projectname: { type: String, required: true },
  username: { type: String, required: true },
  url: { type: String, required: true },

});

const ProjectForm = mongoose.model("ProjectForm", ProjectFormSchema);

module.exports = ProjectForm;
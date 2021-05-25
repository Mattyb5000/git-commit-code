const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  id: { type: String, required: true },
  language: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: Boolean}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

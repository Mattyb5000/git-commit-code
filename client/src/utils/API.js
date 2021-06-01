import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    console.log("you're in getProjects");
    return axios.get("/api/projects/");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
//deletes project in progress
  deleteProjectInProgress: function(id) {
    return axios.delete("/api/users/" + id);
  },
//gets a single user
  getUser: function() {
    return axios.get("/api/users/get-user/");
  },
//adds a user project in progress
  addUserProjectInProgress: function(id) {
    return axios.put("/api/users/new-project/", {id});
  },
//adds a user completed project
  addUserCompletedProject: function(id) {
    return axios.put("/api/users/completed-project", id);
  },
//gets project forms
  getProjectForms: function() {
    return axios.get("/api/projectForms/");
  },
  // Gets the ProjectForm with the given id
  getProjectForm: function(id) {
    return axios.get("/api/projectForms/" + id);
  },
  // Deletes the ProjectForm with the given id
  
  deleteProjectForm: function(id) {
    return axios.delete("/api/projectForms/" + id);
  },
  // Saves a ProjectForm to the database
  saveProjectForm: function(projectFormData) {
    return axios.post("/api/projectForms/", projectFormData);
  }
};

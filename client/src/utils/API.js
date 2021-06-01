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

  deleteProjectInProgress: function(id) {
    return axios.delete("/api/users/" + id);
  },

  getUser: function() {
    return axios.get("/api/users/get-user");
  },

  addUserProjectInProgress: function(id) {
    alert('you are in addUserProjectInProgress api route');
    return axios.put("/api/users/new-project", {id});
  },

  addUserCompletedProject: function(id) {
    alert('you are in addUserProjectInProgress api route');
    return axios.put("/api/users/completed-project", id);
  },

  //**** Add /remove (project in progress) */

  getProjectForms: function() {
    return axios.get("/api/projectForms");
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

  // Saves a project to the database
  // saveProject: function(projectData) {
  //   return axios.post("/api/projects", projectData);
  // },
  //add user functions here

import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar"
import ProjectCard from "../components/ProjectCard/index.js";
import ProjectTitle from "../components/ProjectTitle/index.js";
//import fake API data
import FakeAPI from "../utils/FakeAPI";


function JavaScriptProjects() {
  
  // sets initial state of projects
const [projects, setProjects] = useProjects([])

  // loads all projects and sets them to projects
useEffect(() => {
  loadProjects()
}, [])

function loadProjects() {
  FakeAPI.getProjects()
  .then(res =>
    setProjects(res.data)
    )
    .catch(err => console.log(err));
};

return (
    <div>
      <Navbar2 />
      <ProjectCard />
      {/* <ProjectTitle />   */}
      {/* 6 cards */}
         
        </div>
  )};

export default JavaScriptProjects;
import React from "react";
import Navbar2 from "../components/Navbar2/Navbar";
import ProjectCard from "../components/ProjectCard/index.js";
import ProjectTitle from "../components/ProjectTitle/index.js";

const AlgProjects = () => {
  
    return (
      <div>
        <Navbar2 />
        <ProjectTitle />  
        {/* 6 cards */}
        <ProjectCard />
       
           </div>
    );
  }


export default AlgProjects;
import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar";
import ProjectCard from "../components/ProjectCard/index.js";
import ProjectTitle from "../components/ProjectTitle/index.js";
//import fake API data
import FakeAPI from "../utils/FakeAPI";

const JavaScriptProjects = () => {
	// sets initial state of projects
	const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadProjects();
	}, []);

	function loadProjects() {
    // store date from api call in a variable that is an array
    const tempArray = FakeAPI.getProjects();
    const jsArray = tempArray.filter(jsProj => jsProj.language === "javascript");
    console.log(jsArray);

    //sort data in that variable array
    // pass sorted array to setProjects function
    setProjects(jsArray); 
    //once I'm using the API, the projects need to be sorted in setProjects function within curly braces
		/*	//.then((res) => setProjects(res.data))
			.catch((err) => {
				console.log(err);
			});*/
	}
	return (
		<div>
			<div>Hello</div>
			<Navbar2 />
      {projects.map(jsProj => (
        <ProjectCard {...jsProj}/>
      ))}
			
			{/* <ProjectTitle />   */}
			{/* 6 cards */}
		</div>
	);
};

export default JavaScriptProjects;

import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ProjectCard from "../components/ProjectCard/index.js";
import API from "../utils/API.js"

const JavaScriptProjects = () => {
	// sets initial state of projects
	const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadProjects();
	}, []);

	const loadProjects =() => {
		// store date from api call in a variable that is an array
		API.getProjects()
		.then(res =>
			console.log(res)
			// setProjects(res.filter((jsProj) => jsProj.language === "Javascript"))
			// console.log(res)
			
			)
		console.log(projects);
	}
		// const jsArray = tempArray.filter(
		// 	(jsProj) => jsProj.language === "javascript"
		// );
		

		//sort data in that variable array
		// pass sorted array to setProjects function
		// setProjects(jsArray);
		//once I'm using the API, the projects need to be sorted in setProjects function within curly braces
		/*	//.then((res) => setProjects(res.data))
			.catch((err) => {
				console.log(err);
			});*/
	// function setProjects() {

	// }
	
		
	return (
		<div>
			<Navbar2 />
			<h5 className="pageTitle text-center pt-5">JavaScript Projects</h5>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around">
						{projects.map((jsProj) => (
							<ProjectCard {...jsProj} />
						))}
					
				</div>
			</div>
		</div>
	);
};

export default JavaScriptProjects;

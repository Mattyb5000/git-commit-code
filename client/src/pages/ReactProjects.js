import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ProjectCard from "../components/ProjectCard/index.js";
import API from "../utils/API";

const ReactProjects = () => {
	// sets initial state of projects
	const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadProjects();
	}, []);
	
		const loadProjects = () => {
			// store date from api call in a variable that is an array
			console.log("you are in the loadProjects function");
			API.getProjects()
				.then((res) => {
					console.log(res.data);
					setProjects(
						res.data.filter((reactProj) => reactProj.language === "React")
					);
				})
				.catch((err) => console.log(err));
		};
		console.log("Is this projects", projects);	
	
	return (
		<div>
			<Navbar2 />
			<h5 className="pageTitle text-center pt-5">React Projects</h5>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around">
					{projects.map((reactProj) => (
						<ProjectCard {...reactProj} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ReactProjects;

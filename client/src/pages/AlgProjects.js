import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ProjectCard from "../components/ProjectCard/index.js";
// import ProjectTitle from "../components/ProjectTitle/index.js";
//import fake API data
import FakeAPI from "../utils/FakeAPI";

const AlgProjects = () => {
	// sets initial state of projects
	const [projects, setProjects] = useState([]);

	// loads all projects and sets them to projects
	useEffect(() => {
		loadProjects();
	}, []);

	function loadProjects() {
		// store date from api call in a variable that is an array
		const tempArray = FakeAPI.getProjects();
		const algArray = tempArray.filter(
			(algProj) => algProj.language === "algorithm"
		);
		console.log(algArray);

		//sort data in that variable array
		// pass sorted array to setProjects function
		setProjects(algArray);
		//once I'm using the API, the projects need to be sorted in setProjects function within curly braces
		/*	//.then((res) => setProjects(res.data))
			.catch((err) => {
				console.log(err);
			});*/
	}
	return (
		<div>
			<Navbar2 />
			<h5 className="pageTitle text-center pt-5">Algorithms Practice</h5>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around">
					{projects.map((algProj) => (
						<ProjectCard {...algProj} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AlgProjects;

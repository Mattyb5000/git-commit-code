import React from "react";
import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ProjectCard from "../components/ProjectCard/index.js";
import API from "../utils/API";
import {Modal, Button} from "react-bootstrap";

const ReactProjects = () => {
	// sets initial state of projects
	const [projects, setProjects] = useState([]);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
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

		const handleProjectSelect = id => {
			console.log("in handleProjectSelect of reactProjects");
			console.log(id);
	
			API.addUserProjectInProgress(id).then((res) => {
				console.log(res.data);
				setShow(true);
			});
		};
	
	return (
		<div className="brick_background">
			<Navbar2 />
			<h5 className="pageTitle text-center pt-5">React Projects</h5>
			<div className="container-fluid">
				<div className="row d-flex justify-content-around">
				{projects.map((reactProj) => (
							<ProjectCard {...reactProj} key={reactProj._id}
							handleProjectSelect={handleProjectSelect} />
					))}
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You have added this project to your Projects in Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please visit your profile page to see your Projects in Progress</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
		</div>
	);
};

export default ReactProjects;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "./projectform";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

//when project is clicked, it's removed from the user's projects in progress

function ProjectForm(props) {
	var proj = props.clickedProj;
	const projId = proj._id;
	const projTitle = proj.title;

	// Setting our component's initial state
	const [projectForms, setProjectForms] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all ProjectForms and store them with setProjectForms
	useEffect(() => {
		loadProjectForms();
	}, []);

	// Loads all ProjectForms and sets them to ProjectForms
	function loadProjectForms() {
		API.getProjectForms()
			.then((res) => setProjectForms(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a projectForm from the database with a given id, then reloads ProjectForms from the db
	function deleteProjectForm(id) {
		API.deleteProjectForm(id)
			.then((res) => loadProjectForms())
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}
	
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.username) {
			
			API.saveProjectForm({
				_id: projId,
				projectname: projTitle,
				username: formObject.username,
				url: formObject.url,
			});
			// const id = req.session.user_id;
			console.log("projId is" + projId);
			API.addUserCompletedProject({
				
				id: projId,
			})

				.then((res) => loadProjectForms())
				.catch((err) => console.log(err));
		}
	}

	return (
		<Container fluid>
			<Row>
				<Col size="sm-12">
					<h3>Enter Your Project Here:</h3>

					<form key={projId}>
						<Input
							onChange={handleInputChange}
							value={projTitle}
							name="projectname"
							type="string"
							placeholder="Project Name (required)"
						/>
						<Input
							onChange={handleInputChange}
							name="username"
							placeholder="Enter User Name"
						/>
						<TextArea
							onChange={handleInputChange}
							name="url"
							placeholder="Deployed URL"
						/>

						<FormBtn
							disabled={!formObject.username}
							//onClick={() => this.handleFormSubmit()}
							onClick={handleFormSubmit}
						>
							Submit Project
						</FormBtn>
					</form>
				</Col>
				<Col size="sm-12">
					{projectForms.length ? (
						<List>
							{projectForms.map((projectForm) => (
								<ListItem key={projectForm._id}>
									<Link to={"/projectForm/" + projectForm._id}>
										<strong>
											{projectForm.projectname} by {projectForm.username}
										</strong>
									</Link>
									<DeleteBtn
										onClick={() => deleteProjectForm(projectForm._id)}
									/>
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Project to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default ProjectForm;

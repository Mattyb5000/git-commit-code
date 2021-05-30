import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "./projectform";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

function ProjectForms() {
  // Setting our component's initial state
  const [projectForms, setProjectForms] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all ProjectForms and store them with setProjectForms
  useEffect(() => {
    loadProjectForms()
  }, [])

  // Loads all ProjectForms and sets them to ProjectForms
  function loadProjectForms() {
    API.getProjectForms()
      .then(res => 
        setProjectForms(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a projectForm from the database with a given id, then reloads ProjectForms from the db
  function deleteProjectForm(id) {
    API.deleteProjectForm(id)
      .then(res => loadProjectForms())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveprojectForm method to save the projectForm data
  // Then reload ProjectForms from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.projectname && formObject.username) {
      API.saveProjectForm({
        projectname: formObject.projectname,
        username: formObject.username,
        url: formObject.url
      })
        .then(res => loadProjectForms())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container className="fluid">
      <Row>
        <Col size="sm-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="projectname"
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
              disabled={!(formObject.projectname && formObject.username)}
              onClick={handleFormSubmit}
            >
              Submit Project
            </FormBtn>
          </form>
        </Col>
        <Col size="sm-6">
          {projectForms.length ? (
            <List>
              {projectForms.map(projectForm => (
                <ListItem key={projectForm._id}>
                  <Link to={"/completedprojects/" + projectForm._id}>
                    <strong>
                      {projectForm.projectname} by {projectForm.username}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteProjectForm(projectForm._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h6>No Project to Display</h6>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default ProjectForms;


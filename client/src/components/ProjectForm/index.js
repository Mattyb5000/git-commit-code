import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "./projectform";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

//when project is clicked, project name goes into first input field
//when project is clicked, it's removed from the user's projects in progress

//when submit button is clicked, project is added to user's completed project array

//when submit button is clicked, form clears

function ProjectForms(props) {
  console.log(props.clickedProj);
  var proj = props.clickedProj;
  console.log(proj);
  console.log(proj._id);
  console.log(proj.title);
  const projId = proj._id;
  console.log(projId);
  const projTitle = proj.title;
  console.log(projTitle);
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
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveprojectForm method to save the projectForm data
  // Then reload ProjectForms from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    alert('button has been clicked');
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
    <Container fluid>
      <Row>
        <Col size="sm-12">
       
        <h3>Enter Your Project Here:</h3>
      
          <form key={projId}>
            <Input
              value={projTitle}
              name="projectname"
              placeholder="Project Name (required)"
              readOnly
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
            disabled={!(formObject.username)}
              // disabled={!(formObject.projectname && formObject.username)}
              onClick={handleFormSubmit}
            >
              Submit Project
            </FormBtn>
          </form>
        </Col>
        <Col size="sm-12">
          {projectForms.length ? (
            <List>
              {projectForms.map(projectForm => (
                <ListItem key={projectForm._id}>
                  <Link to={"/projectForm/" + projectForm._id}>
                    <strong>
                      {projectForm.projectname} by {projectForm.username}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteProjectForm(projectForm._id)} />
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


export default ProjectForms;


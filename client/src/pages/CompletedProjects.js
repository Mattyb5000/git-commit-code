import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import Navbar1 from "../components/Navbar1/Navbar1";

function CompletedProjects(props) {
  const [projectForm, setProjectForm] = useState({})

 
  const {id} = useParams()
  useEffect(() => {
    API.getProjectForm(id)
      .then(res => setProjectForm(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
    
    <Container fluid>
      <Navbar1/>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Great Job, 
              {projectForm.username}! Your Hard Work Will Pay Off!
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
            {projectForm.projectname} is a tough project. 
            </h1>
          </Jumbotron>
        </Col>
      </Row>
     
      <Jumbotron>
      <Row>
      <Col size="md-12">
    
            <p>
            <Link to="/profile"><h2>← Back to My Profile</h2></Link>
            </p>
   
        </Col>
      </Row>
      </Jumbotron>
      <Row>
        <Col size="md-2">
      
        </Col>
      </Row>
    </Container>
  );
}

export default CompletedProjects;


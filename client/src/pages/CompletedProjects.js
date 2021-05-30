import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Posted(props) {
  const [ProjectForm, setProjectForm] = useState({})

 
  const {id} = useParams()
  useEffect(() => {
    API.getProjectForm(id)
      .then(res => setProjectForm(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {ProjectForm.projectname} by {ProjectForm.username}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>URL</h1>
              <p>
                {ProjectForm.url}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to My Profile</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Posted;

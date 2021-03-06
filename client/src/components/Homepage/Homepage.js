import React from "react";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1/Navbar1";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="background">
      <Navbar1 id="navbar"/>
      <div className="welcome animate__animated animate__fadeInUpBig">
        <div className="head">
          <h2>Welcome to Git.Commit</h2>
        </div>
        <div className="content">
          <p>
            New member? <br></br> Signup for free below, then checkout our
            projects page to keep polishing your skills!
          </p>
        </div>
        <Link to="/login" type="button" className="btn btn-lg btn-primary" disabled>
          Signup
        </Link>
      </div>
      
    </div>
  );
}

export default Homepage;

import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="welcome animate__animated animate__flip">
        <div className="head">
          <h2>Welcome to Git.Commit</h2>
        </div>
        <div className="content">
          <p>
            New member? <br></br> Signup for free below, then checkout out our
            projects page to keep polishing your skills!
          </p>
        </div>
        <button type="button" class="btn btn-lg btn-primary" disabled>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Homepage;

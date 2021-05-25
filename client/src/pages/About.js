import React from "react";
import Navbar2 from "../components/Navbar2/Navbar2"
import "../App.css";

function About() {
  return (
    <div className="container">
      <div className="about animate__animated animate__fadeIn">
        <h2>Why we developed Git.Commit</h2>
        <div>
          <p>
            You've just completed your coding bootcamp. Congrats! But now what?
            While it's possible to teach yourself how to code, many of us joined
            a bootcamp because of the discipline and accountability a class
            provides. But once class is over, it can be difficult to continue
            learning and practicing.
          </p>
        </div>
        <div>
          <p>
            Git.Commit is created by coding bootcamp grads for coding bootcamp
            grads to help you stay motivated and track your progress. Git.Commit
            provides practice projects and coding challenges so you can continue
            to sharpen your newly acquired skills, build your portfolio, and
            attract employers.
          </p>
        </div>

        <h2>How it works</h2>
        <p>
          Create a profile and and navigate to your profile page. From there you
          can choose a language, framework, or coding challange from the
          selections in the "Projects" drop down link. Then choose a project or
          challenge from the cards presented to add it to your in-progress
          projects. Your profile also displays projects currently in progress
          and completed, and graphs to track your progress.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
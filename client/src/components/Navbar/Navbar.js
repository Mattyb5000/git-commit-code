import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <h1>Git.Commit.Code.</h1>
      <div className="navLinks">
        <p className="effect">Home</p>
        <p className="effect">About</p>
        <p className="effect">Login</p>
        <p className="effect">My Profile</p>
        <p className="effect">Set Goals</p>
        <p className="effect">More</p>
      </div>
    </nav>
  );
}

export default Navbar;

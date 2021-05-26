import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import logo from "./logo.png";

function Navbar2() {
  return (
    <nav className="navbar navbar-expand">
      <img className="logo" alt="logo" src={logo}></img>
      <div className="navLinks ">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="effect">Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p className="effect">About</p>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="effect">Logout</p>
        </Link>
        {/* -------------------------------------------------- */}

        <div class="dropdown">
          <p class="effect">Projects</p>
          <div class="dropdown-content">
            <Link to="/jsproject">
            <a href="#">Javascript</a>
            </Link>
            <Link to="/algoprojects">
            <a href="#">Algorithms</a>
            </Link>
            <Link to="/reactprojects">
            <a href="#">React</a>
            </Link>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <p className="effect">My Profile</p>
        </Link>
        <Link to="/goals" style={{ textDecoration: "none" }}>
          <p className="effect">Set Goals</p>
        </Link>
        <Link to="/more" style={{ textDecoration: "none" }}>
          <p className="effect">More</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;

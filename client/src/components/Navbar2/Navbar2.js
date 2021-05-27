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

        <div className="dropdown">
          <p className="effect">Projects</p>
          <div className="dropdown-content">
            <Link to="/jsprojects" style={{ textDecoration: "none" }}>
          <p className="effect">JavaScript Projects</p></Link>
            <Link to="/algprojects" style={{ textDecoration: "none" }}>
          <p className="effect">Algorithm Practice</p></Link>
            <Link to="/reactprojects" style={{ textDecoration: "none" }}>
          <p className="effect">React Projects</p></Link>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <p className="effect">My Profile</p>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p className="effect">Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;

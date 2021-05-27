import React from "react";
import { Link } from "react-router-dom";
import "./Navbar1.css";
import logo from "./logo.png";

function Navbar1() {
  return (
    <nav className="navbar1 navbar-expand-lg">
      <img className="logo" alt="logo" src={logo}></img>
      <div className="navLinks1">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="effect">Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p className="effect">About</p>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="effect">Login</p>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <p className="effect">My Profile</p>
        </Link>
        {/* <Link to="/goals" style={{ textDecoration: "none" }}>
          <p className="effect">Set Goals</p>
        </Link> */}
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p className="effect">Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar1;

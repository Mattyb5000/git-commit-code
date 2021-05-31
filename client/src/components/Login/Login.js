import React, { useState } from "react";
import "./Login.css";
import Navbar2 from "../Navbar2/Navbar2";
import Axios from "axios";
// import { findOne } from "../../../../models/project";

function Login() {
  // use state for login and signup functionality

  const [loggedIn, setLoggedIn] = useState(false);

  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const loginFunc = (event) => {
    event.preventDefault();
    fetch("/api/users/login")
      .then((response) => response.json())
      .then((data) => setLoggedIn(true))
      .then(console.log("you are now logged in!!!"))
      .catch(console.log("something went wrong logging in"));
  };

  // const signupFunc = (event) => {
  //   event.preventDefault();
  //   fetch("/api/users/")
  //     .then((response) => response.json())
  //     .then((data) => setLoggedIn(true))
  //     .then(console.log("you are now signed up!!!"))
  //     .catch(console.log("something went wrong signing up"));
  // };

  const signupFunc = (event) => {
    event.preventDefault();
    Axios.post("/api/users/", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div className="brick_background">
      <Navbar2 />
      <div className="container col-9-sm animate__animated animate__fadeIn">
        <div className="row ">
          {/* Signup */}
          <div className="form col-6 text-center">
            <h1 className="title">Signup</h1>
            <form onSubmit={signupFunc}>
              <div className="form-outline mb-4">
                <input
                  onChange={handleEmailInputChange}
                  type="email"
                  value={values.email}
                  className="form-control"
                />
                <label className="form-label center-text">Email address</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={handleFirstNameInputChange}
                  value={values.firstName}
                  type="firstName"
                  className="form-control"
                  id="firstName-signup"
                />
                <label className="form-label">First Name</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={handleLastNameInputChange}
                  value={values.lastName}
                  type="lastName"
                  className="form-control"
                  id="lastName-signup"
                />
                <label className="form-label">Last Name</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  onChange={handlePasswordInputChange}
                  value={values.password}
                  type="password"
                  className="form-control"
                  id="password-signup"
                />
                <label className="form-label">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="submit"
                className="signinBtn btn btn-primary btn-block"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* login */}
          <div className="col-6 text-center">
            <h1 className="title">Login</h1>
            <form onSubmit={loginFunc}>
              <div className="form-outline mb-4">
                <input type="email" className="form-control" />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" className="form-control" />
                <label className="form-label">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <button
                type="submit"
                className=" signinBtn btn btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

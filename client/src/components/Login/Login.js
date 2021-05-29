import React, { useState } from "react";
import "./Login.css";
import Navbar2 from "../Navbar2/Navbar2";

function Login() {
  // use state for login and signup functionality

  const [loggedIn, setLoggedIn] = useState(false);

  function signupFunc() {
    // setLoggedIn(true);
    console.log("signed up");
  };

  function loginFunc() {
    // setLoggedIn(true);
    console.log("logged in");
  };

  return (
    <div className="brick_background">
      <Navbar2 />
      <div className="container col-9-sm animate__animated animate__fadeIn">
        <div className="row ">
          {/* Signup */}
          <div className="form col-6 text-center">
            <h1 className="title">Signup</h1>
            <form>
              <div class="form-outline mb-4">
                <input type="email" id="form1Example1" class="form-control" />
                <label class="form-label center-text" for="form1Example1">
                  Email address
                </label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="firstName"
                  id="form1Example1"
                  class="form-control"
                  id="firstName-signup"
                />
                <label class="form-label" for="form1Example1">
                  First Name
                </label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="lastName"
                  id="form1Example1"
                  class="form-control"
                  id="lastName-signup"
                />
                <label class="form-label" for="form1Example1">
                  Last Name
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  class="form-control"
                  id="password-signup"
                />
                <label class="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                onClick={signupFunc()}
                type="submit"
                class="signinBtn btn btn-primary btn-block"
              >
                Sign Up
              </button>
            </form>
          </div>




          




          {/* login */}
          <div className="col-6 text-center">
            <h1 className="title">Login</h1>
            <form>
              <div class="form-outline mb-4">
                <input type="email" id="form1Example1" class="form-control" />
                <label class="form-label" for="form1Example1">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  class="form-control"
                />
                <label class="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <button
                onCLick={loginFunc()}
                type="submit"
                class=" signinBtn btn btn-primary btn-block"
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

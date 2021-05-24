import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile"
import Goals from "./components/Goals/Goals";
import More from "./components/More/More";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="background">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/goals" component={Goals} />
          <Route exact path="/More" component={More} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

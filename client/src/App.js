import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import About from "./pages/About/About";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile"
import JavaScriptProjects from "./pages/JavaScriptProjects";
import ReactProjects from "./pages/ReactProjects";
import AlgProjects from "./pages/AlgProjects";
import Contact from "./pages/Contact/Contact";
import CompletedProjects from "./pages/CompletedProjects";
// import ProjectForm from "./components/ProjectForm/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/jsprojects" component={JavaScriptProjects} />
      <Route exact path="/reactprojects" component={ReactProjects} />
      <Route exact path="/algprojects" component={AlgProjects} />
      <Route exact path="/projectForm/:id">
        <CompletedProjects />
        </Route>
      <Route exact path="/contact" component={Contact} />
    </Switch>
    {/* </div> */}
    <Footer />
    </Router>
  );
}

export default App;



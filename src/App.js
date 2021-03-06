import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";
import './fontawesome';

import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Community from "./Pages/Community";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/community" component={Community} />
          {/* <Route path="/topics" component={Topics} /> */}
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

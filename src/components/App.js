import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./navigation/footer";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="components-wrapper">
          <div className="intro">
            <h1>Jesse Bettridge</h1>
            <p>Full Stack Web Developer</p>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

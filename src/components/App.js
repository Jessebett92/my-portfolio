import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navigation/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="components-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

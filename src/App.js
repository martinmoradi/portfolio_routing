import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div>Bonjour ceci est l'app</div>
        <hr />
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>{" "}
            <Route path="/about">
              <About />
            </Route>{" "}
            <Route path="/works">
              <Works />
            </Route>{" "}
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

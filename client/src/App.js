import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "./components/Grid"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import './App.css';
import Nav from "./components/Nav";
import ProfileCard from "./components/Profilecard"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Row>
          <Col size="md-10">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row>
            <ProfileCard />
        </Row>
      </div>
    </Router>
  );
}

export default App;

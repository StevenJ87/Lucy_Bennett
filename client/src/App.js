import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Row, Col } from "./components/Grid"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Location from "./pages/Location";
import './App.css';
import Nav from "./components/Nav";
import ProfileCard from "./components/Profilecard"

function App() {
  return (
    <Router style={{ overflow: "hidden" }}>
      <div className="body">
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
              <Route exact path="/location">
                <Location />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
      <div className="footer">
        <Row>
          <ProfileCard />
        </Row>
      </div>

    </Router>
  );
}

export default App;

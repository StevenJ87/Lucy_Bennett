import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Row, Col } from "./components/Grid"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css';
import Nav from "./components/Nav";
import ProfileCard from "./components/Profilecard"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Row>
          <Col size="md-2">
            <ProfileCard/>
          </Col>
          <Col size="md-10">
        <Switch>
          <Route exact path="/">
            <Home/>
            </Route>
          <Route exact path="/projects">
          <Projects/>
          </Route>
        </Switch>
        </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "../Grid";
import './style.css';

function Nav() {
  return (
    <Container>
      <Col size="sm-6">
        <Link className="nav-link" to="/short">
          Short Cuts
          </Link>
        <Link className="nav-link" to="/natural">
          Natural Colors
          </Link>
          <Link className="nav-link" to="/medium">
          Medium Cuts
          </Link>
      </Col>
      <Col size="sm-6">
        <Link className="nav-link" to="/fashion">
          Fashion Colors
          </Link>
        <Link className="nav-link" to="/long">
          Long Cuts
          </Link>
        <Link className="nav-link" to="/styles">
          Styles
          </Link>
      </Col>
    </Container>
  );
}

export default Nav;

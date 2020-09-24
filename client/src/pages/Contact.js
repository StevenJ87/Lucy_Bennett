import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import {ExternalLink} from "react-external-link"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <h1>Contact</h1>
              <ExternalLink href="mailto: lucybennett.styles@gmail.com" className="btn">Email</ExternalLink>
            </div>
            </div>
        </Row>
      </Container>
    );
  }
}


export default Home;

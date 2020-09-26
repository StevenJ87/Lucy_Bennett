import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { ExternalLink } from "react-external-link"
import { Form } from "react-bootstrap"
import Profile from "../images/profile.jpg"

class Location extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-12">
            <div className="body-text">
              <img className="profile-pic" src={Profile} />
              <h1>Location</h1>
              <p>
                I am currently enrolled at <ExternalLink className="schoolLink" href="https://paulmitchell.edu/austin">Paul Mitchell, The School</ExternalLink> in Austin, TX.
                  </p>
              <p>
                As soon as I have a more permantent location, I will be updating the information displayed on this page as soon as it is applicable.
                  </p>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}


export default Location;
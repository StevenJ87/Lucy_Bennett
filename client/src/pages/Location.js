import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { ExternalLink } from "react-external-link"

class Location extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-12">
            <div className="body-text">
              <img className="profile-pic" alt="profilePic" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120253440_10224237448352731_4460245152169846847_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Jo_B1lDUaHYAX9KmeFx&_nc_ht=scontent-dfw5-1.xx&oh=b74cfb6ec03f8ee88a6f469b6b4f58db&oe=5F9309F6" />
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
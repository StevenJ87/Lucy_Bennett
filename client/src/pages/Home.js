import React, { Component } from "react";
import { Row, Container, Col } from "../components/Grid";
import "./index.css"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-12">
            <div className="body-text">
            <Row>
              <Col  size="md-3">
              <img className="profile-pic" alt="profilePic" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120253440_10224237448352731_4460245152169846847_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Jo_B1lDUaHYAX9KmeFx&_nc_ht=scontent-dfw5-1.xx&oh=b74cfb6ec03f8ee88a6f469b6b4f58db&oe=5F9309F6"/>
              </Col>
              <Col size="md-9">
                <div className="innerText">
              <h1>About</h1>
              <p>
                Hello there friends!
                </p>
              <p>
                My name is Lucy Bennett and it is truly a pleasure to have you here.
                </p>
                <p>
                  I am an Artistic, creative, and patient cosmetologist with an extensive customer service background and an upbringing in the hair styling world! 
                  </p>
                <p>
                Come with me on this journey through the fantastic world of hair care! On this page you will find all the cuts, colors, and styles I have performed. I hope to never stop learning new things!!
                  </p>
                  </div>
                  </Col>
                  </Row>
            </div>
            </div>
        </Row>
      </Container>
    );
  }
}


export default Home;

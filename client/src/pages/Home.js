import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import Profile from "../images/profile.jpg"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-12">
            <div className="body-text">
              <img className="profile-pic" src={Profile}/>
              <h1>About</h1>
              <p>
                Hello there friends!
                </p>
              <p>
                My name is Lucy Bennett and it is truly a pleasure to have you here.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
            </div>
            </div>
        </Row>
      </Container>
    );
  }
}


export default Home;

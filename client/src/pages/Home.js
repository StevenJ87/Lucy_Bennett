import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <h1>About</h1>
              <p>
                Hello there friends!
                </p>
              <p>
                My name is Steven Johnson and it is truly a pleasure to have you here.
                </p>
                <p>
                  I am a Full stack web developer with engineering experience educated at Massachusetts Maritime Academy. I have experience with HTML, CSS, Javascript, GitHub, Bootswatch, VS Code and a variety of coding related applications. I have a lot of strength in interpersonal relationships and communication from my history of holding management positions and working in close quarters. I have success working with teams in dangerous and stressful working conditions including deep sea rigs and isolated work stations including Antarctica. I am looking forward to working with experienced web developers on complicated projects that benefit all communities.
                  </p>
            </div>
            </div>
        </Row>
      </Container>
    );
  }
}


export default Home;

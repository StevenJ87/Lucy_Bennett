import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import longcut1 from "../images/longcut1.PNG"
import longcut2 from "../images/longcut2.PNG"
import longcut3 from "../images/longcut3.PNG"
import shortcut1 from "../images/shortcut1.PNG"
import shortcut2 from "../images/shortcut2.PNG"
import shortcut3 from "../images/shortcut3.PNG"
import natcolor1 from "../images/natcolor1.PNG"
import natcolor2 from "../images/natcolor2.PNG"
import natcolor3 from "../images/natcolor3.PNG"
import fashcolor1 from "../images/fashcolor1.PNG"
import fashcolor2 from "../images/fashcolor2.PNG"
import fashcolor3 from "../images/fashcolor3.PNG"
import style1 from "../images/style1.PNG"
import style2 from "../images/style2.PNG"
import style3 from "../images/style3.PNG"

class Projects extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <h1>Portfolio</h1>

              {/* Project 1 */}<br></br>
              <h4 className="project-title">Short Cuts</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={shortcut1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={shortcut2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={shortcut3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 2 */}<br></br>
              <h4 className="project-title">Long Cuts</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={longcuts1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={longcuts2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={longcuts3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 3 */}<br></br>
              <h4 className="project-title">Natural Colors</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={natcolor1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={natcolor2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={natcolor3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
           
          {/* Project 4 */}<br></br>
          <h4 className="project-title">Fashion Colors</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fashcolor1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fashcolor2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fashcolor3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 4 */}<br></br>
          <h4 className="project-title">Styles</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={style1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={style2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={style3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div>
          </div>
        </Row>
      </Container>
    );
  }
}


export default Projects;

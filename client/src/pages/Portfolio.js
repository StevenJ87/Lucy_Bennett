import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import longcut1 from "../images/longcut1.jpg"
import longcut2 from "../images/longcut2.jpg"
import longcut3 from "../images/longcut3.jpg"
import shortcut1 from "../images/shortcut1.jpg"
import shortcut2 from "../images/shortcut2.jpg"
import shortcut3 from "../images/shortcut3.jpg"
import natcolor1 from "../images/natcolor1.jpg"
import natcolor2 from "../images/natcolor2.jpg"
import natcolor3 from "../images/natcolor3.jpg"
import fashcolor1 from "../images/fashcolor1.jpg"
import fashcolor2 from "../images/fashcolor2.jpg"
import fashcolor3 from "../images/fashcolor3.jpg"
import style1 from "../images/style1.jpg"
import style2 from "../images/style2.jpg"
import style3 from "../images/style3.jpg"

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
                    src={longcut1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={longcut2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={longcut3}
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

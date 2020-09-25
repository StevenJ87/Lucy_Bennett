import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"

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
                    src=''
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=""
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
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
                    src=''
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
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
                    src=''
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
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
                    src=''
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
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
                    src=''
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src=''
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

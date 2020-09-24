import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import fitfeed1 from "../images/FitFeed1.PNG"
import fitfeed2 from "../images/FitFeed2.PNG"
import fitfeed3 from "../images/FitFeed3.PNG"
import movieMuse1 from "../images/movieMuse1.PNG"
import movieMuse2 from "../images/movieMuse2.PNG"
import movieMuse3 from "../images/movieMuse3.PNG"
import {ExternalLink} from "react-external-link"
import pocketDIY1 from "../images/PocketDIY1.PNG"
import pocketDIY2 from "../images/PocketDIY2.PNG"
import pocketDIY3 from "../images/PocketDIY3.PNG"
import pocketDIY4 from "../images/PocketDIY4.PNG"
import pocketDIY5 from "../images/PocketDIY5.PNG"
import pocketDIY6 from "../images/PocketDIY6.PNG"

class Projects extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <h1>Projects</h1>

              {/* Project 1 */}<br></br>
              <h4 className="project-title">movieMuse</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={movieMuse1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={movieMuse2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={movieMuse3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p>
                Source for movie and music content, designed to help users navigate the relationship between movies and their associated soundtracks and movie scores.
                A user can search for a movie and find the associated albums having to do with the score or soundtrack. These can be selected and the user is taken to the iTunes store for more information.
                  </p>
              <p>
                For this first project, I worked with my partners on every aspect. We took turns sharing our screen and writing code for API calls, CSS styling, and front end javascript.
                This project uses API calls to gather information based on users search criteria and displays movies and music related to that search.
                  </p>
              <h5><ExternalLink href="https://ayodejiamosun.github.io/Project-1/">GitHub Deployed</ExternalLink></h5>
              <h5><ExternalLink href="https://github.com/ayodejiamosun/Project-1">GitHub</ExternalLink></h5>

              {/* Project 2 */}<br></br>
              <h4 className="project-title">FitFeed</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fitfeed1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fitfeed2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={fitfeed3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p>
                Health based social media platform, designed to encourage individuals to start and maintain a healthy lifestyle.
                A user can share discoverable media such as workout videos or recipes and add their own comments when posting.
                  </p>
              <p>
                I worked primarily on the front end UI and javascript on this project.
                This project showcases the understanding of databases through the use of MySQL and Sequelize. A login feature allows users to create unique usernames, create a password that is hashed/salted and stored for later verfication. This application also showcases the use of several different API calls and search parameters within those calls.
                  </p>
              <h5><ExternalLink href="https://fitfeed123.herokuapp.com/">Heroku</ExternalLink></h5>
              <h5><ExternalLink href="https://github.com/jacquelineadean/FitFeed">GitHub</ExternalLink></h5>

              {/* Project 3 */}<br></br>
              <h4 className="project-title">PocketDIY</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY2}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY4}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY5}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pocketDIY6}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p>
                Do It Yourself assistant and geometric calculator.
                Based on user inputs, formulas are used to find a shapes characteristics such as perimeter, area and volume.
                  </p>
              <p>
                In this project,I worked on the back end database, the API calls, the associated table models and data flow, the front end javascript for the display of database data, and geometric calculations associated with data.
                PocketDIY uses the MySQL database with API calls for users login and specific calls that are user dependant.
                  </p>
              <h5><ExternalLink href="https://pocketdiy.herokuapp.com/">Heroku</ExternalLink></h5>
              <h5><ExternalLink href="https://github.com/coreyspratlan/PocketDIY">GitHub</ExternalLink></h5>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}


export default Projects;

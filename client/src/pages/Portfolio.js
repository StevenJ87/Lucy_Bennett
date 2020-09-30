import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom"
import { Row, Container, Col } from "../components/Grid";
import "./index.css"
import ShortCuts from "./ShortCuts"
import MediumCuts from "./MediumCuts"
import LongCuts from "./LongCuts"
import NaturalColors from "./NaturalColors"
import FashionColors from "./FashionColors"
import Styles from "./Styles"

function Projects() {
  return (
    <Router>
      <Container fluid scroll>
        <Row>
          <div className="col-sm-12">
            <div className="body-text">
              <h1>Portfolio</h1>
              <Switch>

                <Route path="/short">
                  <ShortCuts />
                </Route>

                <Route path="/medium">
                  <MediumCuts />
                </Route>

                <Route path="/long">
                  <LongCuts />
                </Route>

                <Route path="/natural">
                  <NaturalColors />
                </Route>

                <Route path="/fashion">
                  <FashionColors />
                </Route>

                <Route path="/styles">
                  <Styles />
                </Route>

                <Route path="/portfolio">

                  <Row>
                    <Col size="md-4">
                      {/* Short Cuts */}<br></br>
                      <Link to="/short">
                        <h4 className="project-title">
                          Short Cuts
                     </h4>
                        <img
                          className="catPic"
                          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237374230878_8350837842506913728_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=ZZLoqw0II54AX-FF7F4&_nc_ht=scontent-dfw5-2.xx&oh=11a249a68fa84eba8a6428dc2280146c&oe=5F955486"
                          alt="Short Cut"
                        />
                      </Link>
                    </Col>

                    <Col size="md-4">
                      {/* Medium Cuts */}<br></br>
                      <Link to="/medium">
                        <h4 className="project-title">
                          Medium Cuts
                      </h4>
                        <img
                          className="catPic"
                          src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237370630788_275224216958963196_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iFPkWALtKiEAX_rQrER&_nc_ht=scontent-dfw5-2.xx&oh=f1a2cd24242dfa3ce25b2e98606ecdd2&oe=5F95CACB'
                          alt="Medium Cut"
                        />
                      </Link>
                    </Col>

                    <Col size="md-4">
                      {/* Long Cuts */}<br></br>
                      <Link to="/long">
                        <h4 className="project-title">
                          Long Cuts
                        </h4>
                        <img
                          className="catPic"
                          src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=RWD-l9-CP1oAX-Ks6QP&_nc_ht=scontent-dfw5-2.xx&oh=eb3ac125cd71bcbfdb42a1242236bcd1&oe=5F95D15B'
                          alt="Long Cut"
                        />
                      </Link>
                    </Col>
                  </Row>

                  <Row>
                    <Col size="md-4">
                      {/* Natural Colors */}<br></br>
                      <Link to="/natural">
                        <h4 className="project-title">
                          Natural Colors
                          </h4>
                        <img
                          className="catPic"
                          src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120139145_10224237373190852_3733763773040926756_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=BAjRWez3DYIAX9YKcME&_nc_ht=scontent-dfw5-2.xx&oh=d136f7a66fb7897156da5db3f7b6c0c3&oe=5F95FABC'
                          alt="Long Cut"
                        />
                      </Link>
                    </Col>

                    <Col size="md-4">
                      {/* Fashion Colors */}<br></br>
                      <Link to="/fashion">
                        <h4 className="project-title">
                          Fashion Colors
                          </h4>
                        <img
                          className="catPic"
                          src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120292549_10224237379191002_2508454696279123990_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=nUOs3lD-L-sAX9fhXxS&_nc_ht=scontent-dfw5-1.xx&oh=d3ad9aa5e1d6cc76ddca6395f63aaff1&oe=5F92AF29'
                          alt="Long Cut"
                        />
                      </Link>
                    </Col>

                    <Col size="md-4">
                      {/* Styles */}<br></br>
                      <Link to="/styles">
                        <h4 className="project-title">
                          Styles
                          </h4>
                        <img
                          className="catPic"
                          src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120143442_10224237369710765_1579216761707640749_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0qgYzofryIMAX8y0Igh&_nc_ht=scontent-dfw5-2.xx&oh=306603bc27e482e1c178dbf55f6b9798&oe=5F95703A'
                          alt="Long Cut"
                        />
                      </Link>
                    </Col>
                  </Row>
                </Route>
              </Switch>
            </div>
          </div>
        </Row>
      </Container>
    </Router>
  );
}

export default Projects;
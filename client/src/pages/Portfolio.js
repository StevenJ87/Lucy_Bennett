import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import ShortCuts from "./ShortCuts"
import MediumCuts from "./MediumCuts"
import LongCuts from "./LongCuts"
import NaturalColors from "./NaturalColors"
import FashionColors from "./FashionColors"
import Styles from "./Styles"

function Projects()  {
    return (
      <Router>
        <Container fluid scroll>
          <Row>
            <div className="col-sm-10">
              <div className="body-text">
                <h1>Portfolio</h1>
                <Switch>

                  <Route exact path="/short">
                    <ShortCuts />
                  </Route>

                  <Route exact path="/medium">
                    <MediumCuts />
                  </Route>

                  <Route exact path="/long">
                    <LongCuts />
                  </Route>

                  <Route exact path="/natural">
                    <NaturalColors />
                  </Route>

                  <Route exact path="/fashion">
                    <FashionColors />
                  </Route>

                  <Route exact path="/styles">
                    <Styles />
                  </Route>

                  <Route exact path="/portfolio">

                    {/* Short Cuts */}<br></br>
                    <h4 className="project-title">
                      <Link to="/short">
                        Short Cuts
                      </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237374230878_8350837842506913728_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=ZZLoqw0II54AX-FF7F4&_nc_ht=scontent-dfw5-2.xx&oh=11a249a68fa84eba8a6428dc2280146c&oe=5F955486"
                      alt="Short Cut"
                    />

                    {/* Medium Cuts */}<br></br>
                    <h4 className="project-title">
                      <Link to="/medium">
                        Medium Cuts
                        </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237370630788_275224216958963196_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iFPkWALtKiEAX_rQrER&_nc_ht=scontent-dfw5-2.xx&oh=f1a2cd24242dfa3ce25b2e98606ecdd2&oe=5F95CACB'
                      alt="Medium Cut"
                    />

                    {/* Long Cuts */}<br></br>
                    <h4 className="project-title">
                      <Link to="/long">
                        Long Cuts
                        </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=RWD-l9-CP1oAX-Ks6QP&_nc_ht=scontent-dfw5-2.xx&oh=eb3ac125cd71bcbfdb42a1242236bcd1&oe=5F95D15B'
                      alt="Long Cut"
                    />

                    {/* Natural Colors */}<br></br>
                    <h4 className="project-title">
                      <Link to="/natural">
                        Natural Colors
                        </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120139145_10224237373190852_3733763773040926756_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=BAjRWez3DYIAX9YKcME&_nc_ht=scontent-dfw5-2.xx&oh=d136f7a66fb7897156da5db3f7b6c0c3&oe=5F95FABC'
                      alt="Long Cut"
                    />

                    {/* Fashion Colors */}<br></br>
                    <h4 className="project-title">
                      <Link to="/fashion">
                        Fashion Colors
                        </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120292549_10224237379191002_2508454696279123990_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=nUOs3lD-L-sAX9fhXxS&_nc_ht=scontent-dfw5-1.xx&oh=d3ad9aa5e1d6cc76ddca6395f63aaff1&oe=5F92AF29'
                      alt="Long Cut"
                    />

                    {/* Styles */}<br></br>
                    <h4 className="project-title">
                      <Link to="/styles">
                        Styles
                        </Link>
                    </h4>
                    <img
                      className="d-block w-100"
                      src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120143442_10224237369710765_1579216761707640749_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0qgYzofryIMAX8y0Igh&_nc_ht=scontent-dfw5-2.xx&oh=306603bc27e482e1c178dbf55f6b9798&oe=5F95703A'
                      alt="Long Cut"
                    />
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
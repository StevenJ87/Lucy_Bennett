import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let longcuts = [
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=RWD-l9-CP1oAX-Ks6QP&_nc_ht=scontent-dfw5-2.xx&oh=eb3ac125cd71bcbfdb42a1242236bcd1&oe=5F95D15B'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Long Cuts */}<br></br>
              <h4 className="project-title">Long Cuts</h4>
                    <Carousel>
                      {longcuts.map(element => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={element}
                              alt="Long Cut"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
        </Row>
      </Container>
    );
  }
}


export default ShortCuts;

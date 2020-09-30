import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let longcuts = [
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=RWD-l9-CP1oAX-Ks6QP&_nc_ht=scontent-dfw5-2.xx&oh=eb3ac125cd71bcbfdb42a1242236bcd1&oe=5F95D15B',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=ZcB7M5_JZBAAX_yviiz&_nc_ht=scontent-dfw5-2.xx&oh=5bef8e76f020439860abbe24bc81ea24&oe=5F99C5DB',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120218734_10224242109909267_8658242274290037604_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=DZwIcoYSKtsAX_gTlat&_nc_ht=scontent-dfw5-2.xx&oh=4dec5c95c1b8ade9cdc93ee87c1731fd&oe=5F985D75',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120192864_10224242110189274_5725863641494668283_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=R_U2abhz-ukAX-wsQuW&_nc_ht=scontent-dfw5-2.xx&oh=6f08722c8b4acb1318ecf4d1a3c58358&oe=5F9BE74E'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Long Cuts */}<br></br>
              <div>
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
                    </div>
        </Row>
      </Container>
    );
  }
}


export default ShortCuts;

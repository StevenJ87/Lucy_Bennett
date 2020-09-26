import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Project 1 */}<br></br>
              <h4 className="project-title">Short Cuts</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237374230878_8350837842506913728_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=ZZLoqw0II54AX-FF7F4&_nc_ht=scontent-dfw5-2.xx&oh=11a249a68fa84eba8a6428dc2280146c&oe=5F955486'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://scontent-dfw5-1.xx.fbcdn.net/v/l/t1.0-9/120218557_10224237377470959_1784292537959794451_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Jzc52U1pJGQAX8ugpU6&_nc_ht=scontent-dfw5-1.xx&oh=a7ec8706811af43a9d34c5a47bf5e90c&oe=5F936E01"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120216691_10224237376990947_14072147148780770_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=aomneSo9sjwAX8e1yk_&_nc_ht=scontent-dfw5-2.xx&oh=0ad8055bab21324b99319fea59ac0f5a&oe=5F92DCA8'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120250904_10224237381391057_4812925187323445256_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=bqIFMAzMeRsAX9nZRJm&_nc_ht=scontent-dfw5-2.xx&oh=d8dbe2aeb242e3d6cc104e294598a400&oe=5F929E3D'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120235431_10224237375150901_7351129304157050855_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=eVmxTwBvm8kAX_n4D5w&_nc_ht=scontent-dfw5-2.xx&oh=5b319cd1ece1a864cb9ae283a106d832&oe=5F93D67A'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120134730_10224237370150776_5445517331773390377_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=j4FKFxWtYykAX8O6C3H&_nc_ht=scontent-dfw5-1.xx&oh=415739e3fcadee26545c181a4a9c0ac3&oe=5F9453BA'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120281513_10224237381351056_1839047088516503035_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=fqRbMA9biGIAX-yvwyX&_nc_ht=scontent-dfw5-1.xx&oh=f215d90aca7d356af57e048685cb49dc&oe=5F9256A3'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120250904_10224237376350931_370928656275849717_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=ChOWeEDofdoAX9RZmK_&_nc_ht=scontent-dfw5-1.xx&oh=6844c5a749c66cde8b4a939cd33853e6&oe=5F95227F'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260917_10224237446112675_9171576474610392466_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=ZF6i6oVeXukAX-HYq-t&_nc_ht=scontent-dfw5-2.xx&oh=113a603b01a565a175106a4b3cbc346e&oe=5F9558FE'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120292229_10224237446512685_6897692524845047866_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=nGCnQboVLNcAX9aI8b5&_nc_ht=scontent-dfw5-2.xx&oh=86155c3e3a574b17264a5288058adafd&oe=5F941A72'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221566_10224237446952696_8305822572031120592_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=zLrGBUPjdUoAX_dAMzB&_nc_ht=scontent-dfw5-1.xx&oh=b3e3e4c4e16f125b344c123bafe40f69&oe=5F953715'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
        </Row>
      </Container>
    );
  }
}


export default ShortCuts;

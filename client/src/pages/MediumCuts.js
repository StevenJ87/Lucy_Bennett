import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let mediumcuts = [
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237370630788_275224216958963196_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iFPkWALtKiEAX_rQrER&_nc_ht=scontent-dfw5-2.xx&oh=f1a2cd24242dfa3ce25b2e98606ecdd2&oe=5F95CACB',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120289232_10224237376230928_4887475885996807557_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Xhu-kUXlwf0AX-7_GPs&_nc_ht=scontent-dfw5-1.xx&oh=c7ffb5c88b3f66940b7f9f27119f95aa&oe=5F92A47A',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120194874_10224237370670789_3504174768286565154_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=uU8556s_4kgAX-NXApi&_nc_ht=scontent-dfw5-1.xx&oh=cda1cf0c05a6b1ee46eefa5beb725f89&oe=5F9379C6',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120201883_10224237374390882_3499907225671622439_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=upzY61pTpGwAX-FWkwe&_nc_ht=scontent-dfw5-2.xx&oh=f80537ca143c3065dae04f07d9f9f74c&oe=5F953661',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120225473_10224237371590812_4091862728756608132_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=uCAXgXstVo8AX_krks1&_nc_ht=scontent-dfw5-2.xx&oh=0a745c581fb73ade2483e932c9c4b695&oe=5F954048',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237379511010_3738175291175270221_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=Gja2J7LtdXsAX8ujeQO&_nc_ht=scontent-dfw5-2.xx&oh=fa97210e771ed5d3c41ed60f4d8a6382&oe=5F95B0EC',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120340424_10224237380791042_1513862930154986035_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=JZmWhmO8tzoAX_yKP9U&_nc_ht=scontent-dfw5-2.xx&oh=479d6659c15ff9006ff73a89b5849b9e&oe=5F945002'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Medium Cuts */}<br></br>
              <h4 className="project-title">Medium Cuts</h4>
                    <Carousel>
                      {mediumcuts.map(element => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={element}
                              alt="Medium Cut"
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

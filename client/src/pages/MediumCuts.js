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
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120340424_10224237380791042_1513862930154986035_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=JZmWhmO8tzoAX_yKP9U&_nc_ht=scontent-dfw5-2.xx&oh=479d6659c15ff9006ff73a89b5849b9e&oe=5F945002',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120250903_10224242114029370_1512301815028096843_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=WS9cYWv8yWsAX8gOqZY&_nc_ht=scontent-dfw5-2.xx&oh=af1daab64979830d32a506a38e8e582a&oe=5F9A77B9',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120219512_10224242114269376_6152137187550840960_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=XBLCBMvqOmMAX_Po-xc&_nc_ht=scontent-dfw5-1.xx&oh=632d50312c358ebf8371984d47dd4caa&oe=5F9B2555',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120218602_10224242115549408_1825334663106884706_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=wwCZKdPppa4AX-PGsMC&_nc_ht=scontent-dfw5-2.xx&oh=09d8e40187feab10c0bc0fcc2d58413d&oe=5F99B16D',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120334913_10224242115789414_6097966511235663181_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=M6JeTF24AvkAX9QpXJ0&_nc_ht=scontent-dfw5-1.xx&oh=b70df2bd4748ecfbd66e84b48573591a&oe=5F9912B2',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120123832_10224242116029420_1206389009049904351_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=OkQYET_aOzcAX_dXXaZ&_nc_ht=scontent-dfw5-1.xx&oh=98ad4aa3f0c88cacbf3d876c2191bc80&oe=5F998839',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120232096_10224242116269426_1240883454910754792_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=4a7xIS_CQ_AAX_mDXzf&_nc_ht=scontent-dfw5-1.xx&oh=4b1cbadcab14e57ac6b7d7c044f4465a&oe=5F9B2620',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120313508_10224242116509432_3458732869519123367_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=7WMF0iJqdTAAX9OD0Oh&_nc_ht=scontent-dfw5-2.xx&oh=6488c6af8c9234856df7f4e140bbdc85&oe=5F9B90DC',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120356662_10224242110429280_8677554819292412737_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=MwBLCfSRMrMAX_Hmypf&_nc_ht=scontent-dfw5-2.xx&oh=e8820132db55c02051b9344158295004&oe=5F9AD70F',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120252941_10224242110709287_5595883902769123371_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=O7otu0KbQYwAX_zpJZa&_nc_ht=scontent-dfw5-1.xx&oh=90bd5b9f36fb0cd3c48182549a083cf0&oe=5F9885D7'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Medium Cuts */}<br></br>
              <div>
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
                    </div>
        </Row>
      </Container>
    );
  }
}


export default ShortCuts;

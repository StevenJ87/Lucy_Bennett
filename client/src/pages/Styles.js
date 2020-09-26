import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let styles = [
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120143442_10224237369710765_1579216761707640749_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0qgYzofryIMAX8y0Igh&_nc_ht=scontent-dfw5-2.xx&oh=306603bc27e482e1c178dbf55f6b9798&oe=5F95703A',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120258274_10224237376190927_6048579985344375028_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=6SWlMEoAPpwAX-eylpc&_nc_ht=scontent-dfw5-2.xx&oh=3d9ac4411c26d98b4098dd7def0f9861&oe=5F95BC1F',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120216691_10224237376990947_14072147148780770_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=aomneSo9sjwAX8e1yk_&_nc_ht=scontent-dfw5-2.xx&oh=0ad8055bab21324b99319fea59ac0f5a&oe=5F92DCA8',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120226519_10224237369790767_7396156556299795661_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=vIcvEPEY22MAX8iQuwe&_nc_ht=scontent-dfw5-2.xx&oh=98ab89193829b7d22a2eac228548d72c&oe=5F9478C1',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120142251_10224237377910970_4624473918148463594_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=-EUniT9sZDsAX_PcOlj&_nc_ht=scontent-dfw5-1.xx&oh=dea899f96f1f22c5f5dc537effd9ee8c&oe=5F92D90A',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120240234_10224237373230853_3225294842943894609_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=5QmCDRHFKP4AX_Ld5fN&_nc_ht=scontent-dfw5-2.xx&oh=b5f3c7f860048cfffd65090aaca8ce01&oe=5F942988',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120305620_10224237381791067_5090063039200717248_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=-VQQE2nmSDgAX9maId4&_nc_ht=scontent-dfw5-1.xx&oh=6665765c0032c92b9851ef763c1f38ba&oe=5F952257',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222380_10224237375310905_7706435675703748189_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=VmvnyyrHQKgAX8NfWq-&_nc_ht=scontent-dfw5-2.xx&oh=d7740e276cc5d5af4f9aa63acca76ab5&oe=5F95E5DF',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120256613_10224237371630813_2795157194058125495_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=6silg_5E20kAX9AFhbt&_nc_ht=scontent-dfw5-2.xx&oh=306ab76b314c4a76ac27eb56df67094d&oe=5F92D6AF',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120231451_10224237379111000_6657338096710095885_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=rZ-_2OkY7JwAX_WXtct&_nc_ht=scontent-dfw5-2.xx&oh=d15b2e4128a00b0168db32a88c5fc63b&oe=5F95CB17',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120236927_10224237381551061_5480899392563576145_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=TxQf8ZEfmLUAX8zqCEY&_nc_ht=scontent-dfw5-1.xx&oh=e741cb0ea99289860a062cd4fa19f339&oe=5F92AAB5',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221432_10224237445552661_635037566903507711_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=oYZe3uqpcssAX-hDaGK&_nc_ht=scontent-dfw5-1.xx&oh=385c60bb2d5dc7b81c2bcd52dcec2f45&oe=5F93D341',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120322486_10224237445832668_6496273836618031209_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=8GyyTEmaT8sAX-bpHAU&_nc_ht=scontent-dfw5-1.xx&oh=da46bee28157ebda3fad7325d3d82de2&oe=5F93A700'

]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Styles */}<br></br>
              <h4 className="project-title">Styles</h4>
                    <Carousel>
                      {styles.map(element => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={element}
                              alt="Styles"
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

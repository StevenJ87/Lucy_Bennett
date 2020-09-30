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
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120322486_10224237445832668_6496273836618031209_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=8GyyTEmaT8sAX-bpHAU&_nc_ht=scontent-dfw5-1.xx&oh=da46bee28157ebda3fad7325d3d82de2&oe=5F93A700',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120220017_10224242107869216_5938172042454755935_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iW3R1pk7RvEAX-xsR4X&_nc_ht=scontent-dfw5-2.xx&oh=8b65d8da5a53944c63805a9f74f9d6a6&oe=5F9A4EC1',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120276790_10224242108269226_8611244977869010636_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=WhZ4LjbxwWsAX_5iQTb&_nc_ht=scontent-dfw5-2.xx&oh=0b0ed4e666902ac6367f04ae201cc58f&oe=5F991258',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120199066_10224242108629235_1341261959889908695_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=u1TwNzxMNrwAX8GU87a&_nc_ht=scontent-dfw5-1.xx&oh=40aaf6bd90a1a7c7626ddab5a2858989&oe=5F9BBDA9',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120059707_10224242109149248_5786568288064644620_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=dcxyxGtqcQQAX-qLhk-&_nc_ht=scontent-dfw5-1.xx&oh=9f2bd2295bbacbb828114b5e26770924&oe=5F9C0E45',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120188655_10224242109629260_4997483084042673008_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=2SNwD_SV7b8AX8QUWpl&_nc_ht=scontent-dfw5-1.xx&oh=f2b3964792985a97538f600a7f4d1357&oe=5F9BEFF9',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120251598_10224242112629335_2745708585104297059_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=I7Olt1O9MJkAX-G29zH&_nc_ht=scontent-dfw5-2.xx&oh=1754a10f39a572578f54548fc0778f34&oe=5F99689A',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120297251_10224242112869341_6479191378611138011_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=lLBVT7YRId4AX92QCFD&_nc_ht=scontent-dfw5-2.xx&oh=dc0539bfba04506128ff45f0723ea170&oe=5F999FED',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120255197_10224242113109347_677298229463090250_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=XSsJnwNjTuwAX9klLz9&_nc_ht=scontent-dfw5-1.xx&oh=2258d1afcec867a5a7b1879c67464898&oe=5F9853C7',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120200860_10224242113589359_8413254813972257522_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=E7L5cOm4sK0AX9uBFQM&_nc_ht=scontent-dfw5-1.xx&oh=63768340d29d574114240c5b2db0fe97&oe=5F9B715B',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120159313_10224242114749388_4572653356133476344_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=s2ingCtsfPMAX9xGSQZ&_nc_ht=scontent-dfw5-2.xx&oh=997971f4ef82a32f2e1e3079efda7425&oe=5F98B0A7',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120197610_10224242114989394_574205986857319277_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=AB5mEG-F46QAX_c7tYC&_nc_ht=scontent-dfw5-1.xx&oh=3cb721a1122d238824bc7c7e247c1bc5&oe=5F9BBB7A'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Styles */}<br></br>
              <div>
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
                    </div>
        </Row>
      </Container>
    );
  }
}


export default ShortCuts;

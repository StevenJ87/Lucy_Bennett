import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let naturalcolors = [
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120139145_10224237373190852_3733763773040926756_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=BAjRWez3DYIAX9YKcME&_nc_ht=scontent-dfw5-2.xx&oh=d136f7a66fb7897156da5db3f7b6c0c3&oe=5F95FABC',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120253440_10224237373310855_8992847251611404112_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=f9DGRmaF4GEAX9hLXer&_nc_ht=scontent-dfw5-2.xx&oh=f9921cf065da63bd497f644ce5fdc6f9&oe=5F92E7E2',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120251461_10224237375230903_6225570298914128380_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=GOib17y2Bi8AX-z4RX7&_nc_oc=AQletlOgM_cJXYzNDxQXNDsElgGzxyav61LSfNBLwE79FgLiSLehDtvtTfeK7VwHyRQEQ3v6pbceLCNA1cO5xPD5&_nc_ht=scontent-dfw5-2.xx&oh=7cd8770cd66e5f7f645cc7cd2c75acba&oe=5F925350',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120187479_10224237378030973_1910078251679533472_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=mZl6Mp8xpo8AX-2TCFz&_nc_ht=scontent-dfw5-1.xx&oh=f799f2b3bd5a263fa6e848031a171546&oe=5F9459FF',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237379711015_6180501550421952454_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=KpYxJ_6keCwAX8xu9QE&_nc_ht=scontent-dfw5-2.xx&oh=49629b00d709b831052fc5c6dea2577c&oe=5F92D82C',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120241783_10224237382111075_924719037924491910_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=ybXyhtAqNVgAX89sbdM&_nc_ht=scontent-dfw5-1.xx&oh=3d1bd7f00d6e54278108e3e626cf218c&oe=5F95B1AE',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222380_10224237375190902_6392523086006285889_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=TUQCUq-hU-IAX9kx3m6&_nc_ht=scontent-dfw5-2.xx&oh=53a3ceb7d7c81fe2152e6c8bfd822b17&oe=5F95F3BB',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120218602_10224242115269401_85746333509298590_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=I1liECj-huIAX_qjE7H&_nc_ht=scontent-dfw5-1.xx&oh=2b74a2e5de6a7b07125910b1467a2601&oe=5F9A0E33',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120199066_10224242112069321_3973356827330886205_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=bSwN2OWKnecAX9K89fU&_nc_ht=scontent-dfw5-1.xx&oh=85f7e293d2f0e48b18099ba571ed25d5&oe=5F98AB2D',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120235749_10224242112349328_372405820450224840_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=ya98AxmEFNYAX9Cras8&_nc_ht=scontent-dfw5-1.xx&oh=4f0aff6669c5e2124e1b3fddb41a8884&oe=5F989386',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120356662_10224242110429280_8677554819292412737_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=MwBLCfSRMrMAX_Hmypf&_nc_ht=scontent-dfw5-2.xx&oh=e8820132db55c02051b9344158295004&oe=5F9AD70F',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120252941_10224242110709287_5595883902769123371_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=O7otu0KbQYwAX_zpJZa&_nc_ht=scontent-dfw5-1.xx&oh=90bd5b9f36fb0cd3c48182549a083cf0&oe=5F9885D7'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Natural Colors */}<br></br>
              <div>
              <h4 className="project-title">Natural Colors</h4>
                    <Carousel>
                      {naturalcolors.map(element => {
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

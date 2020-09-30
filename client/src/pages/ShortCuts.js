import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let shortcuts = [
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237374230878_8350837842506913728_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=ZZLoqw0II54AX-FF7F4&_nc_ht=scontent-dfw5-2.xx&oh=11a249a68fa84eba8a6428dc2280146c&oe=5F955486",
  "https://scontent-dfw5-1.xx.fbcdn.net/v/l/t1.0-9/120218557_10224237377470959_1784292537959794451_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Jzc52U1pJGQAX8ugpU6&_nc_ht=scontent-dfw5-1.xx&oh=a7ec8706811af43a9d34c5a47bf5e90c&oe=5F936E01",
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120216691_10224237376990947_14072147148780770_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=aomneSo9sjwAX8e1yk_&_nc_ht=scontent-dfw5-2.xx&oh=0ad8055bab21324b99319fea59ac0f5a&oe=5F92DCA8',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120250904_10224237381391057_4812925187323445256_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=bqIFMAzMeRsAX9nZRJm&_nc_ht=scontent-dfw5-2.xx&oh=d8dbe2aeb242e3d6cc104e294598a400&oe=5F929E3D',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120235431_10224237375150901_7351129304157050855_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=eVmxTwBvm8kAX_n4D5w&_nc_ht=scontent-dfw5-2.xx&oh=5b319cd1ece1a864cb9ae283a106d832&oe=5F93D67A',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120134730_10224237370150776_5445517331773390377_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=j4FKFxWtYykAX8O6C3H&_nc_ht=scontent-dfw5-1.xx&oh=415739e3fcadee26545c181a4a9c0ac3&oe=5F9453BA',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120281513_10224237381351056_1839047088516503035_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=fqRbMA9biGIAX-yvwyX&_nc_ht=scontent-dfw5-1.xx&oh=f215d90aca7d356af57e048685cb49dc&oe=5F9256A3',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120250904_10224237376350931_370928656275849717_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=ChOWeEDofdoAX9RZmK_&_nc_ht=scontent-dfw5-1.xx&oh=6844c5a749c66cde8b4a939cd33853e6&oe=5F95227F',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260917_10224237446112675_9171576474610392466_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=ZF6i6oVeXukAX-HYq-t&_nc_ht=scontent-dfw5-2.xx&oh=113a603b01a565a175106a4b3cbc346e&oe=5F9558FE',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120292229_10224237446512685_6897692524845047866_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=nGCnQboVLNcAX9aI8b5&_nc_ht=scontent-dfw5-2.xx&oh=86155c3e3a574b17264a5288058adafd&oe=5F941A72',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221566_10224237446952696_8305822572031120592_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=zLrGBUPjdUoAX_dAMzB&_nc_ht=scontent-dfw5-1.xx&oh=b3e3e4c4e16f125b344c123bafe40f69&oe=5F953715',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260917_10224237446112675_9171576474610392466_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=j8x6OScBTuIAX8gZjmn&_nc_ht=scontent-dfw5-2.xx&oh=7375b51e62be076ff3ebd1dc51e88d93&oe=5F994D7E',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120292229_10224237446512685_6897692524845047866_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=LIjfErJGQSEAX8AnYc0&_nc_ht=scontent-dfw5-2.xx&oh=252f33c2d44f51775d4ff5ccc128c49a&oe=5F9C0372',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221566_10224237446952696_8305822572031120592_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=PHvQ1dPITxwAX9BKaNQ&_nc_ht=scontent-dfw5-1.xx&oh=635c570354ab08032d3830e43cddc6fc&oe=5F992B95',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260497_10224237447272704_1283966180043824362_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=PQ_NEIAdi9kAX9uFnD4&_nc_ht=scontent-dfw5-2.xx&oh=3c9bb74fa0447bda5f9d0bec34ee28bd&oe=5F99BFCF',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120199509_10224237447752716_4115313973868326029_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=Z42wnMcMRRoAX-adRuc&_nc_ht=scontent-dfw5-2.xx&oh=0c737cc6f07aeb5e2de40a5a11b04949&oe=5F9A0E02',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120237326_10224237448032723_8628185843300472225_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=x_mUVygODrsAX961w9p&_nc_ht=scontent-dfw5-1.xx&oh=7a3cc938ec4a1aeb16fafdcd070f8238&oe=5F9B6A33',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120228107_10224242110949293_8410408492101870867_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=6JdoGUdJbkoAX-nedQB&_nc_ht=scontent-dfw5-1.xx&oh=2a8f07f51e414c8fb7f6ea453c347c4e&oe=5F9C03A9',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120161243_10224242111189299_124448692554109691_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=9MhN0RyUs5EAX_5LIfc&_nc_ht=scontent-dfw5-2.xx&oh=a539513baef4223c84912d8d999f0891&oe=5F9A8E2B',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120254212_10224242116749438_8695276845653094576_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=PiR9whcc0qsAX9JSzZl&_nc_ht=scontent-dfw5-2.xx&oh=366a7156100143d9558ea3e94ba2f02f&oe=5F9AFB47',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120229521_10224242117029445_790290926545515117_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=Kmlaiwz99fIAX--8-5Z&_nc_ht=scontent-dfw5-2.xx&oh=398531208acb7f117372928f9f388d5e&oe=5F9B5A5C',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120324904_10224242117269451_5244844093628807390_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=G3yMXgnPTSYAX9rxVqr&_nc_ht=scontent-dfw5-2.xx&oh=78c009ba58bd91c781f5a7dabd7053b7&oe=5F9A64CC',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120217573_10224242118749488_576469724548187856_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=aaOL3ap7NgcAX83kHmG&_nc_ht=scontent-dfw5-1.xx&oh=752819ca4068e1292a3bdc6831a96126&oe=5F98EC23',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120352170_10224242118989494_4213111112551036779_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=wvq9iRIKLp8AX-Y4ybO&_nc_ht=scontent-dfw5-2.xx&oh=4289673089fd0a9b69c14c4a1e2f8f40&oe=5F9BEE54',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120222184_10224242119229500_312163340488433830_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=lLjV2lzSK90AX9A1HJ4&_nc_ht=scontent-dfw5-1.xx&oh=f59ca3d985d9208d5061cb4f12c67524&oe=5F9A2195',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120321834_10224242119549508_4816068977267705248_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=ua7Nk89GL-EAX_ppaOj&_nc_ht=scontent-dfw5-2.xx&oh=bfa3eb928553c006bb6af41f0b47a025&oe=5F991419'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Short Cuts */}<br></br>
              <h4 className="project-title">
                      <Link to="/short">
                        Short Cuts
                      </Link>
                    </h4>
                    <Carousel>
                      {shortcuts.map(element => {
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={element}
                              alt="Short Cut"
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

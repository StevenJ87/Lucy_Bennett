import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"
import Nav from "../components/PortfolioNav"

let fashioncolors = [
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120292549_10224237379191002_2508454696279123990_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=nUOs3lD-L-sAX9fhXxS&_nc_ht=scontent-dfw5-1.xx&oh=d3ad9aa5e1d6cc76ddca6395f63aaff1&oe=5F92AF29',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221803_10224237377350956_4266730455692625888_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=M58nNi8gjl4AX_d2d_q&_nc_ht=scontent-dfw5-1.xx&oh=1f275828bb5e7fe5b43a4576d8fca60d&oe=5F95882B',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120188193_10224237380551036_82244395735862790_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=SldP836voIoAX_A6bWa&_nc_ht=scontent-dfw5-1.xx&oh=7c80ae2aa142943ba479e71d3f2149bb&oe=5F960137',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120221917_10224237373470859_87185460393688320_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=DBo3HvoU65oAX_Z5xKd&_nc_ht=scontent-dfw5-2.xx&oh=394e6563f10298723697746cfd5ee061&oe=5F950EB3',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120251470_10224237380911045_1848602502460953782_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=sL6d9B56GTEAX8es6-F&_nc_ht=scontent-dfw5-1.xx&oh=2f769728b780cbd475e9f05e17a92007&oe=5F94056B',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222000_10224237376390932_3837593114869139672_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=eYH-biTtk18AX-dn97C&_nc_ht=scontent-dfw5-2.xx&oh=832a9c1c1882554ae35db815af3b767f&oe=5F94421A',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120289599_10224237372310830_2279221661846251763_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=ec-s7Fe31OUAX_Lz4OI&_nc_ht=scontent-dfw5-1.xx&oh=2780c1efdd8cef3f50d0b9636df4f4c7&oe=5F951068',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120244377_10224237374430883_1994339066118648817_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=jOKy0kGx_3sAX8DSuit&_nc_ht=scontent-dfw5-2.xx&oh=26dde15a8fb16a6acbcd59d53610618b&oe=5F95CAA2',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260497_10224237447272704_1283966180043824362_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=85lP5qYSiJUAX8KdBAf&_nc_ht=scontent-dfw5-2.xx&oh=6ef7e1ef02f3f112ac7f3f0af09f8f94&oe=5F95CB4F',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120199509_10224237447752716_4115313973868326029_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=t3M4bq1T3IMAX8yc0Yj&_nc_ht=scontent-dfw5-2.xx&oh=2ec086f887b81956f9cb30f552584c51&oe=5F961982',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120237326_10224237448032723_8628185843300472225_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=go0Ew0SavhkAX_Sruri&_nc_ht=scontent-dfw5-1.xx&oh=565d19f6ffddba9cfcd58407dcfd02bc&oe=5F938133',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120251458_10224237448672739_226593862747322041_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=p01hmMzQRW4AX9zCiYA&_nc_ht=scontent-dfw5-1.xx&oh=076cb7b248c59a1f9526241ded258fcd&oe=5F93BC18',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260497_10224237447272704_1283966180043824362_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=PQ_NEIAdi9kAX9uFnD4&_nc_ht=scontent-dfw5-2.xx&oh=3c9bb74fa0447bda5f9d0bec34ee28bd&oe=5F99BFCF',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120199509_10224237447752716_4115313973868326029_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=Z42wnMcMRRoAX-adRuc&_nc_ht=scontent-dfw5-2.xx&oh=0c737cc6f07aeb5e2de40a5a11b04949&oe=5F9A0E02',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120237326_10224237448032723_8628185843300472225_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=x_mUVygODrsAX961w9p&_nc_ht=scontent-dfw5-1.xx&oh=7a3cc938ec4a1aeb16fafdcd070f8238&oe=5F9B6A33',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120251458_10224237448672739_226593862747322041_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=oEErsxFxjFAAX8hW-Ko&_nc_ht=scontent-dfw5-1.xx&oh=9ce156b0fe3f90f5e2bfe7b982a372d4&oe=5F9BA518',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120228107_10224242110949293_8410408492101870867_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=6JdoGUdJbkoAX-nedQB&_nc_ht=scontent-dfw5-1.xx&oh=2a8f07f51e414c8fb7f6ea453c347c4e&oe=5F9C03A9',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120161243_10224242111189299_124448692554109691_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=9MhN0RyUs5EAX_5LIfc&_nc_ht=scontent-dfw5-2.xx&oh=a539513baef4223c84912d8d999f0891&oe=5F9A8E2B',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120218606_10224242111549308_8872557816007649129_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=xXpHSpns480AX-XRM7X&_nc_ht=scontent-dfw5-2.xx&oh=c4cb18d36a2d205669cf1c206fc19dd5&oe=5F9BEAA5',
  'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120373327_10224242111789314_4210317246914497189_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=FywbbyOLK70AX_Z6r-b&_nc_ht=scontent-dfw5-2.xx&oh=6f56750ea30209682d15a0e37e15bd90&oe=5F9B6907',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120197233_10224242114509382_6896953662102242645_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=HzHkr8NPaq8AX_9yqnX&_nc_ht=scontent-dfw5-1.xx&oh=0c7ca93c53261b2704dcc2c16a2823db&oe=5F986EF8'
]

class ShortCuts extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
              <Nav/>
              {/* Fashion Colors */}<br></br>
              <div>
              <h4 className="project-title">Fashion Colors</h4>
                    <Carousel>
                      {fashioncolors.map(element => {
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

import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { Carousel } from "react-bootstrap"

class Projects extends Component {
  render() {
    return (
      <Container fluid scroll>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <h1>Portfolio</h1>

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

              {/* Project 2 */}<br></br>
              <h4 className="project-title">Medium Cuts</h4>
              <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237370630788_275224216958963196_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=iFPkWALtKiEAX_rQrER&_nc_ht=scontent-dfw5-2.xx&oh=f1a2cd24242dfa3ce25b2e98606ecdd2&oe=5F95CACB'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120289232_10224237376230928_4887475885996807557_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=Xhu-kUXlwf0AX-7_GPs&_nc_ht=scontent-dfw5-1.xx&oh=c7ffb5c88b3f66940b7f9f27119f95aa&oe=5F92A47A'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120194874_10224237370670789_3504174768286565154_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=uU8556s_4kgAX-NXApi&_nc_ht=scontent-dfw5-1.xx&oh=cda1cf0c05a6b1ee46eefa5beb725f89&oe=5F9379C6'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120201883_10224237374390882_3499907225671622439_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=upzY61pTpGwAX-FWkwe&_nc_ht=scontent-dfw5-2.xx&oh=f80537ca143c3065dae04f07d9f9f74c&oe=5F953661'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120225473_10224237371590812_4091862728756608132_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=uCAXgXstVo8AX_krks1&_nc_ht=scontent-dfw5-2.xx&oh=0a745c581fb73ade2483e932c9c4b695&oe=5F954048'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120200112_10224237379511010_3738175291175270221_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=Gja2J7LtdXsAX8ujeQO&_nc_ht=scontent-dfw5-2.xx&oh=fa97210e771ed5d3c41ed60f4d8a6382&oe=5F95B0EC'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120340424_10224237380791042_1513862930154986035_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=JZmWhmO8tzoAX_yKP9U&_nc_ht=scontent-dfw5-2.xx&oh=479d6659c15ff9006ff73a89b5849b9e&oe=5F945002'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 2 */}<br></br>
              <h4 className="project-title">Long Cuts</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120217381_10224237449232753_3984324590094121753_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=RWD-l9-CP1oAX-Ks6QP&_nc_ht=scontent-dfw5-2.xx&oh=eb3ac125cd71bcbfdb42a1242236bcd1&oe=5F95D15B'
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 3 */}<br></br>
              <h4 className="project-title">Natural Colors</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120139145_10224237373190852_3733763773040926756_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=BAjRWez3DYIAX9YKcME&_nc_ht=scontent-dfw5-2.xx&oh=d136f7a66fb7897156da5db3f7b6c0c3&oe=5F95FABC'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120253440_10224237373310855_8992847251611404112_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=f9DGRmaF4GEAX9hLXer&_nc_ht=scontent-dfw5-2.xx&oh=f9921cf065da63bd497f644ce5fdc6f9&oe=5F92E7E2'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120251461_10224237375230903_6225570298914128380_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=GOib17y2Bi8AX-z4RX7&_nc_oc=AQletlOgM_cJXYzNDxQXNDsElgGzxyav61LSfNBLwE79FgLiSLehDtvtTfeK7VwHyRQEQ3v6pbceLCNA1cO5xPD5&_nc_ht=scontent-dfw5-2.xx&oh=7cd8770cd66e5f7f645cc7cd2c75acba&oe=5F925350'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120187479_10224237378030973_1910078251679533472_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=mZl6Mp8xpo8AX-2TCFz&_nc_ht=scontent-dfw5-1.xx&oh=f799f2b3bd5a263fa6e848031a171546&oe=5F9459FF'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120228077_10224237379711015_6180501550421952454_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=KpYxJ_6keCwAX8xu9QE&_nc_ht=scontent-dfw5-2.xx&oh=49629b00d709b831052fc5c6dea2577c&oe=5F92D82C'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120241783_10224237382111075_924719037924491910_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=ybXyhtAqNVgAX89sbdM&_nc_ht=scontent-dfw5-1.xx&oh=3d1bd7f00d6e54278108e3e626cf218c&oe=5F95B1AE'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222380_10224237375190902_6392523086006285889_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=TUQCUq-hU-IAX9kx3m6&_nc_ht=scontent-dfw5-2.xx&oh=53a3ceb7d7c81fe2152e6c8bfd822b17&oe=5F95F3BB'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
           
          {/* Project 4 */}<br></br>
          <h4 className="project-title">Fashion Colors</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120292549_10224237379191002_2508454696279123990_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=nUOs3lD-L-sAX9fhXxS&_nc_ht=scontent-dfw5-1.xx&oh=d3ad9aa5e1d6cc76ddca6395f63aaff1&oe=5F92AF29'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221803_10224237377350956_4266730455692625888_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=M58nNi8gjl4AX_d2d_q&_nc_ht=scontent-dfw5-1.xx&oh=1f275828bb5e7fe5b43a4576d8fca60d&oe=5F95882B'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120188193_10224237380551036_82244395735862790_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=SldP836voIoAX_A6bWa&_nc_ht=scontent-dfw5-1.xx&oh=7c80ae2aa142943ba479e71d3f2149bb&oe=5F960137'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120221917_10224237373470859_87185460393688320_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=DBo3HvoU65oAX_Z5xKd&_nc_ht=scontent-dfw5-2.xx&oh=394e6563f10298723697746cfd5ee061&oe=5F950EB3'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120251470_10224237380911045_1848602502460953782_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=sL6d9B56GTEAX8es6-F&_nc_ht=scontent-dfw5-1.xx&oh=2f769728b780cbd475e9f05e17a92007&oe=5F94056B'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222000_10224237376390932_3837593114869139672_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=eYH-biTtk18AX-dn97C&_nc_ht=scontent-dfw5-2.xx&oh=832a9c1c1882554ae35db815af3b767f&oe=5F94421A'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120289599_10224237372310830_2279221661846251763_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=ec-s7Fe31OUAX_Lz4OI&_nc_ht=scontent-dfw5-1.xx&oh=2780c1efdd8cef3f50d0b9636df4f4c7&oe=5F951068'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120244377_10224237374430883_1994339066118648817_n.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=jOKy0kGx_3sAX8DSuit&_nc_ht=scontent-dfw5-2.xx&oh=26dde15a8fb16a6acbcd59d53610618b&oe=5F95CAA2'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120260497_10224237447272704_1283966180043824362_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=85lP5qYSiJUAX8KdBAf&_nc_ht=scontent-dfw5-2.xx&oh=6ef7e1ef02f3f112ac7f3f0af09f8f94&oe=5F95CB4F'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120199509_10224237447752716_4115313973868326029_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=t3M4bq1T3IMAX8yc0Yj&_nc_ht=scontent-dfw5-2.xx&oh=2ec086f887b81956f9cb30f552584c51&oe=5F961982'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120237326_10224237448032723_8628185843300472225_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=go0Ew0SavhkAX_Sruri&_nc_ht=scontent-dfw5-1.xx&oh=565d19f6ffddba9cfcd58407dcfd02bc&oe=5F938133'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120251458_10224237448672739_226593862747322041_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=p01hmMzQRW4AX9zCiYA&_nc_ht=scontent-dfw5-1.xx&oh=076cb7b248c59a1f9526241ded258fcd&oe=5F93BC18'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              {/* Project 4 */}<br></br>
          <h4 className="project-title">Styles</h4>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120143442_10224237369710765_1579216761707640749_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=0qgYzofryIMAX8y0Igh&_nc_ht=scontent-dfw5-2.xx&oh=306603bc27e482e1c178dbf55f6b9798&oe=5F95703A'
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120258274_10224237376190927_6048579985344375028_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=6SWlMEoAPpwAX-eylpc&_nc_ht=scontent-dfw5-2.xx&oh=3d9ac4411c26d98b4098dd7def0f9861&oe=5F95BC1F'
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
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120226519_10224237369790767_7396156556299795661_n.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=vIcvEPEY22MAX8iQuwe&_nc_ht=scontent-dfw5-2.xx&oh=98ab89193829b7d22a2eac228548d72c&oe=5F9478C1'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120142251_10224237377910970_4624473918148463594_n.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=-EUniT9sZDsAX_PcOlj&_nc_ht=scontent-dfw5-1.xx&oh=dea899f96f1f22c5f5dc537effd9ee8c&oe=5F92D90A'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120240234_10224237373230853_3225294842943894609_n.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=5QmCDRHFKP4AX_Ld5fN&_nc_ht=scontent-dfw5-2.xx&oh=b5f3c7f860048cfffd65090aaca8ce01&oe=5F942988'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120305620_10224237381791067_5090063039200717248_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=-VQQE2nmSDgAX9maId4&_nc_ht=scontent-dfw5-1.xx&oh=6665765c0032c92b9851ef763c1f38ba&oe=5F952257'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120222380_10224237375310905_7706435675703748189_n.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=VmvnyyrHQKgAX8NfWq-&_nc_ht=scontent-dfw5-2.xx&oh=d7740e276cc5d5af4f9aa63acca76ab5&oe=5F95E5DF'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120256613_10224237371630813_2795157194058125495_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=6silg_5E20kAX9AFhbt&_nc_ht=scontent-dfw5-2.xx&oh=306ab76b314c4a76ac27eb56df67094d&oe=5F92D6AF'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120231451_10224237379111000_6657338096710095885_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=rZ-_2OkY7JwAX_WXtct&_nc_ht=scontent-dfw5-2.xx&oh=d15b2e4128a00b0168db32a88c5fc63b&oe=5F95CB17'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120236927_10224237381551061_5480899392563576145_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=TxQf8ZEfmLUAX8zqCEY&_nc_ht=scontent-dfw5-1.xx&oh=e741cb0ea99289860a062cd4fa19f339&oe=5F92AAB5'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120221432_10224237445552661_635037566903507711_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=oYZe3uqpcssAX-hDaGK&_nc_ht=scontent-dfw5-1.xx&oh=385c60bb2d5dc7b81c2bcd52dcec2f45&oe=5F93D341'
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/120322486_10224237445832668_6496273836618031209_n.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=8GyyTEmaT8sAX-bpHAU&_nc_ht=scontent-dfw5-1.xx&oh=da46bee28157ebda3fad7325d3d82de2&oe=5F93A700'
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div>
          </div>
        </Row>
      </Container>
    );
  }
}


export default Projects;

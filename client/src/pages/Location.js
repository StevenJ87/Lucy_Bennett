import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import "./index.css"
import { ExternalLink } from "react-external-link"
import {Form} from "react-bootstrap"
import Profile from "../images/profile.jpg"

class Location extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-sm-10">
            <div className="body-text">
              <Form>
              <img className="profile-pic" src={Profile}/>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="subject" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}


export default Location;
import React from "react";
import "./style.css";
import profilePic from "../../images/profile.jpg"
import { ExternalLink } from "react-external-link"
import { Card, Button, ModalFooter } from 'react-bootstrap'
import {Col, Row} from "../Grid"
import Insta from "../../images/Instagram.png"
import Face from "../../images/facebook.png"

function ProfileCard() {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <div className="col-md-12">
          <ExternalLink href="https://www.instagram.com/color_me_lucky/" className="btn"><img className="icon" src={Insta}/></ExternalLink>
          <ExternalLink href="https://www.facebook.com/lucybennett.styles" className="btn"><img className="icon" src={Face}/></ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
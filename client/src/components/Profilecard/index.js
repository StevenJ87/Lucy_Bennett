import React from "react";
import "./style.css";
import { ExternalLink } from "react-external-link";
import Insta from "../../images/Instagram.png";
import Face from "../../images/facebook.png";
import Mail from "../../images/email.png";

function ProfileCard() {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <div className="col-md-12">
          <ExternalLink href="https://www.instagram.com/color_me_lucky/" className="btn"><img alt="instagramIcon" className="icon" src={Insta}/></ExternalLink>
          <ExternalLink href="https://www.facebook.com/lucybennett.styles" className="btn"><img alt="facebookIcon" className="icon" src={Face}/></ExternalLink>
          <ExternalLink href="mailto: lucybennett.styles@gmail.com" className="btn"><img alt="gmailIcon" className="icon" src={Mail}/></ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
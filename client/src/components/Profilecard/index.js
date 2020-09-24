import React from "react";
import "./style.css";
import profilePic from "../../images/profile.jpg"
import {ExternalLink} from "react-external-link"

function ProfileCard() {
  return (
      <div className="card" id="profile-card">
        <img id="profile-pic" src={profilePic} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">Steven Johnson</h5>
          <ExternalLink href="https://www.instagram.com/color_me_lucky/" className="btn">Instagram</ExternalLink>
          <ExternalLink href="https://www.facebook.com/lucybennett.styles" className="btn">Facebook</ExternalLink>
        </div>
      </div>
  );
}

export default ProfileCard;

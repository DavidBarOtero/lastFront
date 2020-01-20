import React from "react";
import Facebook from "./../assets/images/Cover/Footer/facebook.svg";
import Instagram from "./../assets/images/Cover/Footer/instagram.svg";
import Twitter from "./../assets/images/Cover/Footer/twitter.svg";
import "./../assets/css/SocialMedia.css";

function SocialMedia() {
  return (
    <div className="socialMedia">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https:///facebook.com/NiceEvent-107635334108622/?view_public_for=107635334108622"
      >
        <img src={Facebook} alt="Facebook" className="facebookIndex" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https:///instagram.com/theniceevent/"
      >
        <img src={Instagram} alt="Instagram" className="instagramIndex" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https:///twitter.com/NEvent20"
      >
        <img src={Twitter} alt="Twitter" className="twitterIndex" />
      </a>
    </div>
  );
}

export { SocialMedia };

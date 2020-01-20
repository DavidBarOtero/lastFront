import React from "react";
import { About } from "./../About";
import { SocialMedia } from "./../SocialMedia";

function FooterIndex(props) {
  return (
    <div className="footerIndex">
      <SocialMedia />
      <About
        resetAbout={props.resetAbout}
        next={props.next}
        previous={props.previous}
        stateWhoWeAre={props.stateWhoWeAre}
        stateHowItWorks={props.stateHowItWorks}
        stateRatingPolitics={props.stateRatingPolitics}
        stateContact={props.stateContact}
        displayHowItWorks={props.displayHowItWorks}
        displayWhoWeAre={props.displayWhoWeAre}
        displayRatingPolitics={props.displayRatingPolitics}
        displayOpenContact={props.displayOpenContact}
      />
    </div>
  );
}

export { FooterIndex };

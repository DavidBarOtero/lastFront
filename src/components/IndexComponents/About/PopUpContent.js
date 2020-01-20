import React from "react";
import { HowItWorks } from "./HowItWorks";
import { RatingPolitics } from "./RatingPolitics";
import { WhoWeAre } from "./WhoWeAre";
import { Contact } from "./Contact";
function PopUpContent(props) {
  return (
    <>
      {props.stateWhoWeAre === true ? (
        <WhoWeAre
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
        />
      ) : props.stateHowItWorks === true ? (
        <HowItWorks
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
        />
      ) : props.stateRatingPolitics === true ? (
        <RatingPolitics
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
        />
      ) : props.stateContact !== true ? (
        ""
      ) : (
        <Contact
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
        />
      )}
    </>
  );
}

export { PopUpContent };

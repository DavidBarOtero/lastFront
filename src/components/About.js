import React from "react";
import { PopUpContent } from "./IndexComponents/About/PopUpContent";
import "./../assets/css/AboutPopUp.css";

function About(props) {
  return (
    <>
      <PopUpContent
        resetAbout={props.resetAbout}
        next={props.next}
        previous={props.previous}
        stateWhoWeAre={props.stateWhoWeAre}
        stateHowItWorks={props.stateHowItWorks}
        stateRatingPolitics={props.stateRatingPolitics}
        stateContact={props.stateContact}
      />

      <p onClick={props.displayWhoWeAre} className="AboutP">
        ¿Quienes somos?
      </p>
      <p onClick={props.displayHowItWorks} className="AboutP">
        ¿Cómo funciona?
      </p>
      <p onClick={props.displayRatingPolitics} className="AboutP">
        Política de rating
      </p>

      <p onClick={props.displayOpenContact} className="AboutP">
        Contacto
      </p>
    </>
  );
}

export { About };
/*EN CONTACTO HACER PETICIOeN A API PA MANDAR MAIL*/

import React from "react";
import { ButtonPopUp } from "./../../IndexComponents/About/ButtonPopUp";

function WhoWeAre(props) {
  return (
    <article className="aboutPopUp">
      <h1>¿Quienes Somos?</h1>
      <p>
        NicEvent es una pequeña startup cuya misión es poner en contacto a
        usuarios con los mejores profesionales para llevar acabo toda clase de
        eventos de forma fácil y sencilla.
      </p>
      <ButtonPopUp
        resetAbout={props.resetAbout}
        next={props.next}
        previous={props.previous}
        stylePrev={{ color: "black" }}
      />
    </article>
  );
}

export { WhoWeAre };

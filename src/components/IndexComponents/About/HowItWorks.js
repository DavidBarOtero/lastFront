import React from "react";
import { ButtonPopUp } from "./../../IndexComponents/About/ButtonPopUp";
function HowItWorks(props) {
  return (
    <article className="aboutPopUp">
      <h1>¿Cómo funciona?</h1>
      <p>
        Fija una fecha, verifica la disponibilidad del profesional y realiza el
        pago.
      </p>
      <br></br>
      <p>ASI DE SENCILLO!!</p>
      <div>
        <ButtonPopUp
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
        />
      </div>
    </article>
  );
}

export { HowItWorks };

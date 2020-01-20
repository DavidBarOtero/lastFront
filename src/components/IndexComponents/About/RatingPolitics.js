import React from "react";
import { ButtonPopUp } from "./../../IndexComponents/About/ButtonPopUp";

function RatingPolitics(props) {
  return (
    <article className="aboutPopUp">
      <h1>Política de Rating</h1>
      <p>
        NicEvent es una pequeña startup y como tal, momentáneamente no está
        disponible ningún sistema de disputas de pagos por lo que os animamos a
        dar feedback de vuestros eventos realizados y utilizar nuestro sistema
        de ratings
      </p>
      <ButtonPopUp
        resetAbout={props.resetAbout}
        next={props.next}
        previous={props.previous}
      />
    </article>
  );
}

export { RatingPolitics };

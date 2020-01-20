import React from "react";

import Number1 from "./../../assets/images/Cover/content/1.svg";
import Number2 from "./../../assets/images/Cover/content/2.svg";
import Number3 from "./../../assets/images/Cover/content/3.svg";
import "./../../assets/css/Cover/ContentCover.css";

function ContentCover(props) {
  return (
    <content className="contentCover">
      <article className="groupNumbersCover">
        <img src={Number1} alt="number one" className="contentNumbersCover" />
        <p className="contentPCover">Comienza en Nicevent registrándote</p>
      </article>
      <article className="groupNumbersCover">
        <img src={Number2} alt="number two" className="contentNumbersCover" />
        <p className="contentPCover">Fija una fecha y lugar </p>
      </article>
      <article className="groupNumbersCover">
        <img src={Number3} alt="number three" className="contentNumbersCover" />
        <p className="contentPCover">
          Confirma el evento con tu profesional favorito!!
        </p>
      </article>
      <article className="groupNumbersCover">
        <p className="contentRatingPCover">
          Tu opinión es nuestro motor, no olvides VALORAR los eventos que hayas
          realizado. Comienza ya!!!
        </p>
      </article>
    </content>
  );
}

export { ContentCover };

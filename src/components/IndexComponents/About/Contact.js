import React from "react";
import { ButtonPopUp } from "./../../IndexComponents/About/ButtonPopUp";
function Contact(props) {
  return (
    <article className="aboutPopUp">
      <h1>Contacto</h1>
      <p>
        Puedes contactarnos en cualquier momento en :<br></br>NicEvent@gmail.com
      </p>

      <div>
        <ButtonPopUp
          resetAbout={props.resetAbout}
          next={props.next}
          previous={props.previous}
          style={{ color: "black" }}
        />
      </div>
    </article>
  );
}

export { Contact };

import React from "react";

const ButtonPopUp = props => {
  return (
    <div className="paddingButtonPopUp">
      <a href="#" onClick={props.previous} style={props.stylePrev}>
        &laquo;
      </a>

      <button className="buttonPopUp" onClick={props.resetAbout}>
        Entendido
      </button>
      <a href="#" onClick={props.next} style={props.style}>
        &raquo;
      </a>
    </div>
  );
};

export { ButtonPopUp };

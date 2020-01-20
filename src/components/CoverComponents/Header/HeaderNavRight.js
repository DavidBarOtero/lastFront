import React from "react";
import "./../../../assets/css/Cover/HeaderNavRight.css";

const HeaderNavRight = props => {
  return (
    <nav className="rightIndexPanelCover">
      <button
        className="standarButton"
        style={{ border: "1px solid white" }}
        onClick={props.displayRegister}
      >
        Registrarse
      </button>
      <button className="standarButton" onClick={props.displayLogin}>
        Conectarse
      </button>
    </nav>
  );
};
export { HeaderNavRight };

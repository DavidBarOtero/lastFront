import React from "react";

import { Slider } from "./Slider";

import { HeaderNavRight } from "./HeaderNavRight";
import "./../../../assets/css/Cover/Header.css";
import "./../../../assets/css/Cover/HeaderNavRight.css";

function Header(props) {
  return (
    <header className="headerCover">
      <Slider />

      <HeaderNavRight
        displayLogin={props.displayLogin}
        displayRegister={props.displayRegister}
        stateLogin={props.stateLogin}
        stateRegister={props.stateRegister}
      />
    </header>
  );
}

export { Header };

// <ProfesionalDropdown
//   // professionalDropLi={props.professionalDropLi}
//   // stateProfesionalDropdown={props.stateProfesionalDropdown}
//   // alternateProfesionalDropdown={props.alternateProfesionalDropdown}
// />

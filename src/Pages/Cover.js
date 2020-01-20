import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../components/CoverComponents/Header/Header";
import { CoverCard } from "./../components/CoverComponents/CoverCard";
import { FinderCover } from "./../components/CoverComponents/FinderCover";
import "./../assets/css/Cover/CoverStyle.css";
import "./../assets/css/Cover/Forms.css";

function Cover(props) {
  const [exampleCards, setExampleCards] = useState(true);
  useEffect(() => {
    if (props.stateLogin === true) {
      setExampleCards(false);
    } else if (props.stateRegister === true) {
      setExampleCards(false);
    } else {
      setExampleCards(true);
    }
  });
  return (
    <>
      <main className="mainCover">
        <Header
          onClick={props.resetLoginRegisterProfesionalDropdown}
          displayLogin={props.displayLogin}
          displayRegister={props.displayRegister}
          stateLogin={props.stateLogin}
          stateRegister={props.stateRegister}
        />
        <div
          style={{
            display: "flex"
          }}
        ></div>
        {props.stateRegister === true && (
          <props.formRegister onClick={props.displayLogin} />
        )}
        {props.stateLogin === true && (
          <props.formLogin onClick={props.displayRegister} />
        )}
        {props.stateFinder === true && <FinderCover />}
      </main>
      {exampleCards && (
        <div className="exampleCards">
          <CoverCard
            onClick={props.displayRegister}
            className="coverCard"
            nameProfession="Música"
            name="Antonio Diaz"
            description="Clásicos de toda la vida versionados por mi"
            fee="150"
            ratingAverage="3.9"
            ratingTotal="15"
          />
          <CoverCard
            onClick={props.displayRegister}
            className="coverCard"
            nameProfession="Catering"
            name="La Atalaya"
            description="Déjanos formar parte de tus mejores momentos, haciendo de ellos un dia inolvidable"
            fee="250"
            ratingAverage="4.2"
            ratingTotal="35"
          />
          <CoverCard
            onClick={props.displayRegister}
            className="coverCard"
            nameProfession="Fotografía"
            name="Estela Arroyo"
            description=" Mi manera de trabajar consiste en orientar, no imponer, hasta así, conseguir lo que realmente estas buscando. "
            fee="150"
            ratingAverage="3.9"
            ratingTotal="15"
          />
        </div>
      )}
    </>
  );
}

export { Cover };

import React from "react";
import { useState } from "react";
import CreditCard from "./IndexComponents/Events/CreditCard";
import { useAuth } from "./Api/auth-requests";

const PopUpCard = props => {
  const [displayPayment, setDisplayPayment] = useState();

  const { tokenOk } = useAuth();

  console.log(tokenOk);

  return (
    <article
      style={{
        alignContent: "initial",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem"
      }}
    >
      {displayPayment && (
        <CreditCard
          token={tokenOk}
          idProfessional={props.idProfessional}
          idCity={props.idCity}
          onClick={props.onClick}
          name={props.name}
          email={props.email}
          nameProfession={props.nameProfession}
          datePicker={props.datePicker}
        />
      )}
      <p style={{ fontSize: "1.5rem" }}> {props.nameProfession}</p>
      <h1 style={{ fontSize: "2.5rem" }}> {props.name}</h1>

      <p style={{ fontSize: "1.5rem" }}> {props.description}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1 style={{ fontSize: "1.5rem", paddingTop: ".5rem" }}>Valoración </h1>
        <div style={{ display: "flex", paddingTop: ".5rem" }}>
          <div style={{ fontSize: "1.5rem" }}> {props.ratingAverage}</div>
          <div style={{ fontSize: "1.5rem" }}>/{props.ratingTotal}</div>
        </div>
        <div
          style={{
            fontSize: "2.5rem",
            alignContent: "center",
            marginLeft: "3rem"
          }}
        >
          {props.fee}€
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceAround",
          paddingTop: "1rem"
        }}
      >
        <button
          className="buttonPopUp"
          style={{ fontSize: "1rem" }}
          onClick={() => setDisplayPayment(true)}
        >
          Reservar
        </button>
        <button
          onClick={props.onClick}
          style={{
            backgroundColor: "red",
            fontSize: "1rem",
            padding: "10px 20px"
          }}
          className="standarSubmitButton"
        >
          Cancelar
        </button>
      </div>
    </article>
  );
};

export { PopUpCard };

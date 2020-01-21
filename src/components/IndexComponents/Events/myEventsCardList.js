import React from "react";
import { Rating } from "./Rating";
import "./../../../assets/css/Index/MisEventos.css";

export default function MyEventsCardList(props) {
  const today = new Date();
  const dateFormated = new Date(today)
    .toISOString()
    .replace("T", " ")
    .substr(0, 10);
  console.log(dateFormated);
  console.log(today);
  return (
    <div className="containerMyEvents">
      {dateFormated < props.Date && (
        <>
          <article className="nextEvent">
            <h1 className="nextEventh">Próximos Evento</h1>
            <div className="eventCardDate">{props.Date}</div>
            <h2>{props.Name}</h2>
          </article>
        </>
      )}
      {dateFormated >= props.Date && (
        <>
          <article className="pastEvent">
            <div className="eventCardDate">{props.Date}</div>
            <h2>{props.Name}</h2>
            <Rating
              idProfessional={props.idProfessional}
              idEvent={props.idEvent}
            />
          </article>
        </>
      )}
    </div>
  );
}

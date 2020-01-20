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
    <div style={{ padding: ".3rem" }}>
      <article
        className={
          dateFormated > props.Date
            ? "pastEvent"
            : dateFormated < props.Date
            ? "nextEvent"
            : dateFormated === props.Date
            ? "todayEvent"
            : ""
        }
      >
        <div className="eventCardHeader">
          <h2>{props.Name}</h2>
          {dateFormated > props.Date && (
            <Rating
              idProfessional={props.idProfessional}
              idEvent={props.idEvent}
            />
          )}
          <div className="eventCardDate">{props.Date}</div>
        </div>

        <div className="ratingDateContainer ">
          <div className="eventCardRating"></div>
        </div>
      </article>
    </div>
  );
}

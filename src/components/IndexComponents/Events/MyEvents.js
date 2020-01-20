import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./../../Api/auth-requests";
import MyEventsCardList from "./myEventsCardList";

function MyEvents() {
  const [myEvents, setMyEvents] = useState([]);
  const { tokenOk } = useAuth();

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${tokenOk}`;
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/myevents`)
      .then(res => {
        const result = res.data;
        setMyEvents(result);
        console.log(result);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);
  const dateFormated = props =>
    new Date(props)
      .toISOString()
      .replace("T", " ")
      .substr(0, 10);
  return (
    <div>
      {myEvents.map(props => (
        <MyEventsCardList
          key={props.idEvent}
          Name={props.Name}
          Date={dateFormated(props.Date)}
          idEvent={props.idEvent}
          idProfessional={props.idProfessional}
          ratingAverage={props.RatingAverage}
          ratingCount={props.RatingCount}
          email={props.Email}
        />
      ))}
    </div>
  );
}

export { MyEvents };

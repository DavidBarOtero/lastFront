import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
/* CAMBIAR POST POR EVENTS */

function ChangeEvents() {
  const [myEvents, setMyEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/events`)
      .then(res => {
        const result = [...res.data];
        setMyEvents(result);
        console.log(res.data[0]);
        console.log(result);
      })
      .then()
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {myEvents.map(props => (
          <li>{props}</li>
        ))}
      </ul>
    </div>
  );
}
export { ChangeEvents };

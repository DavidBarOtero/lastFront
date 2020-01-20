import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "./../../Api/auth-requests";
import BeautyStars from "beauty-stars";

function Rating(props) {
  const [valueRating, setValueRating] = useState(0);
  const { tokenOk } = useAuth();
  useEffect(() => {
    if (valueRating !== 0) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokenOk}`;

      axios.post(`${process.env.REACT_APP_BACKEND}/api/myevents/`, {
        data: {
          idProfessional: props.idProfessional,
          idEvent: props.idEvent,
          rate: valueRating
        }
      });
    }
  }, [valueRating]);

  return (
    <div>
      <BeautyStars
        value={valueRating}
        size="20px"
        onChange={valueRating === 0 && (value => setValueRating(value))}
      />
    </div>
  );
}

export { Rating };

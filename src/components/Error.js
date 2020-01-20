import React from "react";
import "./../assets/css/ErrorForm.css";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid"></div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }

  return <div className="form-message valid"></div>;
};

export default Error;

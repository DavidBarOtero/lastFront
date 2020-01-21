import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "./../../UserCard";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

function ContentEventProfesionalFinder() {
  const [allProfessionalsList, setAllProfessionalsList] = useState([]);
  const [cities, setCities] = useState([]);
  const [serverResponse, setServerResponse] = useState([]);
  const [selectedCity, setSelectedCity] = useState("1");
  const [selectedProfession, setSelectedProfession] = useState("1");
  const [datePicker, setDatePicker] = useState(new Date());

  function getAllProfessionals() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/frontprofession`)
      .then(res => {
        const result = res.data;
        setAllProfessionalsList(result);
      })
      .catch(err => {
        console.error(err);
      });
  }
  useEffect(() => {
    getAllProfessionals();
    getCities();
  }, []);

  function getCities() {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/frontcities`)
      .then(res => {
        const result = res.data;

        setCities(result);
        // console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  }
  function handleChangeProfession(e) {
    setSelectedProfession(e.target.value);
  }
  function handleChangeCity(e) {
    setSelectedCity(e.target.value);
  }

  function handleChangeDate(e) {
    setDatePicker(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND}/api/professionalfinder/${selectedProfession}/${selectedCity}/${datePicker}`
        )
        .then(res => {
          const result = res.data;
          console.log(result);
          setServerResponse(result);
          console.log(serverResponse);
          console.log(datePicker);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const today = new Date();

  return (
    <>
      <form className="professionalFinder" onSubmit={handleSubmit}>
        <div>
          <h4>Ciudad</h4>
          <select
            onChange={handleChangeCity}
            value={selectedCity}
            className="selectCity"
          >
            {cities.map(props => (
              <option key={props.idCity} value={props.idCity}>
                {props.Name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h4>Profesionales</h4>
          <select
            value={selectedProfession}
            onChange={handleChangeProfession}
            className="selectProfession"
          >
            {allProfessionalsList.map(props => (
              <option key={props.idProfession} value={props.idProfession}>
                {props.NameProfession}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h4>Fecha</h4>
          <DatePicker
            selected={today > datePicker ? today : datePicker}
            onChange={handleChangeDate}
            dateFormat="yyyy/MM/dd"
            className="datePicker"
          />
        </div>

        <button
          className="defaultFormButtonSubmit "
          type="button"
          onClick={async () => {
            try {
              await axios
                .get(
                  `${process.env.REACT_APP_BACKEND}/api/professionalfinder/${selectedProfession}/${selectedCity}/${datePicker}`
                )
                .then(res => {
                  const result = res.data;
                  console.log(result);
                  setServerResponse(result);
                  console.log(serverResponse);
                  console.log(datePicker);
                });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Buscar
        </button>
      </form>
      <div className="professionalFinderResult">
        {serverResponse &&
          serverResponse.map(props => (
            <UserCard
              idProfessional={props.idProfessional}
              idCity={props.idCity}
              datePicker={datePicker}
              key={props.idProfessional}
              nameProfession={props.NameProfession}
              name={props.Name}
              LastName={props.LastName}
              fee={props.Fee}
              description={props.Description}
              ratingAverage={props.RatingAverage}
              ratingTotal={props.RatingCount}
              email={props.Email}
            />
          ))}
      </div>
    </>
  );
}
export { ContentEventProfesionalFinder };

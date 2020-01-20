import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../../assets/css/Index/AsideContentIndex.css";

function AsideContentIndex() {
  const [openEvent, setOpenEvent] = useState(false);
  const [openPaids, setOpenPaids] = useState(false);
  const [openProfesional, setOpenProfesional] = useState(false);
  useEffect(() => {
    if (openEvent) {
      setOpenProfesional(false);
      setOpenPaids(false);
    }
  }, [openEvent]);
  // useEffect(() => {
  //   if (openPaids) {
  //     setOpenProfesional(false);
  //     setOpenEvent(false);
  //   }
  // }, [openPaids]);
  useEffect(() => {
    if (openProfesional) {
      setOpenPaids(false);
      setOpenEvent(false);
    }
  }, [openProfesional]);

  return (
    <article className="asideContentIndex">
      <button
        className="buttonEventAside"
        onClick={() => setOpenEvent(!openEvent)}
      >
        Eventos
      </button>

      {openEvent && (
        <div className="buttonsDisplayedDiv">
          <Link to="/index/MyEvents" className="noLinkDecoration">
            <button className="buttonsHideAside">Mis Eventos</button>
          </Link>

          <Link to="/index/EventCreate" className="noLinkDecoration"></Link>

          <Link to="/index/EventEdit" className="noLinkDecoration"></Link>
          <Link to="/index/EventDelete" className="noLinkDecoration">
            <button className="buttonsHideAside">Eliminar </button>
          </Link>
        </div>
      )}

      <button
        className="buttonProfesionalAside"
        onClick={() => setOpenProfesional(!openProfesional)}
      >
        Profesionales
      </button>

      {openProfesional && (
        <div className="buttonsDisplayedDiv">
          <Link to="/index/ProfesionalsFinder" className="noLinkDecoration">
            <button className="buttonsHideAside">Buscar</button>
          </Link>
        </div>
      )}
    </article>
  );
}

export { AsideContentIndex };
// <button
//   className="buttonPaidAside"
//   onClick={() => setOpenPaids(!openPaids)}
// >
//   Pagos
// </button>
// {openPaids && (
//   <div className="buttonsDisplayedDiv">
//     <Link to="/index/PendingPayments" className="noLinkDecoration">
//       <button className="buttonsHideAside">Pendientes</button>
//     </Link>

//     <Link to="/index/DonePayments" className="noLinkDecoration">
//       <button className="buttonsHideAside">Realizados</button>
//     </Link>
//   </div>
// )}

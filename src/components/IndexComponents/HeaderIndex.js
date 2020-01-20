import React from "react";
import "./../../assets/css/Index/HeaderIndex.css";
import { useAuth } from "./../Api/auth-requests";
import { Link } from "react-router-dom";

function HeaderIndex(props) {
  const { logout } = useAuth();
  return (
    <header className="headerIndex">
      <div className="botonesHeader">
        <Link to="/index/ProfesionalsFinder" className="noLinkDecoration">
          <button>Buscador</button>
        </Link>
        <Link to="/index/MyEvents" className="noLinkDecoration">
          <button className="standarButton">Reservas</button>
        </Link>
        <button onClick={logout} className="standarButton">
          Logout
        </button>
      </div>
    </header>
  );
}

export { HeaderIndex };

import React from "react";
import Logo from "./../../assets/images/logoNicevent.png";
import "./../../assets/css/Index/HeaderIndex.css";
import { useAuth } from "./../Api/auth-requests";

function HeaderIndex(props) {
  const { logout } = useAuth();
  return (
    <header className="headerIndex">
      <div>
        <img src={Logo} alt="Logo" className="LogoIndex" />
      </div>
      <div className="botonesHeader">
        <button onClick={logout} className="standarButton">
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}

export { HeaderIndex };

import React from "react";

function SelectProfesionalForm(props) {
  return (
    <div>
      <div className="paddingSelecProfesional">
        <label htmlFor="profession">Profesión</label>
        <select className="selectProfesionalForm">
          {props.profesion.map(props => (
            <option key={props.idProfession} value={props.idProfession}>
              {props.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="paddingSelecProfesional">
        <label htmlFor="ciudad">Ciudad</label>
        <select className="selectProfesionalForm">
          {props.province.map(props => (
            <option key={props.idCity} value={props.idCity}>
              {props.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="paddingSelecFee">
        <label htmlFor="honorarios">Honorarios</label>
        <input className="selectFee" placeholder="€/hora" />
      </div>
    </div>
  );
}
export { SelectProfesionalForm };

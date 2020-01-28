import React from "react";
import Cards from "react-credit-cards";
import axios from "axios";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router-dom";
export default class CreditCard extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    formErrors: { name: "", expiry: "", cvc: "" }
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  z;

  render(props) {
    console.log(this.props.token);
    return (
      <div id="PaymentForm" style={{ display: "flex", flexWrap: "wrap" }}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="creditCard">
          <div className="creditDiv">
            <input
              className="inputCreditCard"
              type="text"
              maxLength="30"
              name="name"
              placeholder="Nombre/Apellidos"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              autoComplete="off"
            />
          </div>
          <div>
            <input
              className="inputCreditCard"
              type="text"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              maxLength="16"
              minLength="16"
              autoComplete="off"
            />
          </div>

          <input
            className="inputCreditCard"
            type="text"
            name="expiry"
            maxLength="4"
            placeholder="expiration date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="inputCreditCard"
            type="text"
            maxLength="3"
            name="cvc"
            placeholder=" CVC code"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <button
            type="button"
            className="buttonPopUp"
            onClick={props => {
              console.log(props.token);

              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${this.props.token}`;
              axios
                .post(`${process.env.REACT_APP_BACKEND}/api/payment`, {
                  idProfessional: this.props.idProfessional,
                  name: this.props.name,
                  email: this.props.email,

                  datePicker: this.props.datePicker,
                  idCity: this.props.idCity
                })
                .then(res => {
                  console.log(res);
                  console.log();
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          >
            Confirmar Pago
          </button>
          <button
            className="buttonPopUp"
            style={{
              backgroundColor: "red",
              fontSize: "1rem",
              padding: "10px 20px"
            }}
            className="standarSubmitButton"
            onClick={this.props.onClick}
          >
            Cancelar
          </button>
        </form>
      </div>
    );
  }
}

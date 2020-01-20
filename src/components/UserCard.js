import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { useState, useEffect } from "react";
import { useAuth } from "./Api/auth-requests";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { PopUpCard } from "./PopUpCard";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const [displayProfessionalPopUp, setDisplayProfessionalPopUp] = useState();
  const classes = useStyles();
  const { isAuthenticated } = useAuth();
  return (
    <>
      {displayProfessionalPopUp && (
        <PopUpCard
          idProfessional={props.idProfessional}
          idCity={props.idCity}
          nameProfession={props.nameProfession}
          name={props.name}
          description={props.description}
          ratingAverage={props.ratingAverage}
          ratingTotal={props.ratingTotal}
          email={props.email}
          fee={props.fee}
          onClick={() => setDisplayProfessionalPopUp(false)}
          datePicker={props.datePicker}
        />
      )}
      {!displayProfessionalPopUp && (
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.nameProfession}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
            ></Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <div
            style={{ fontSize: "2rem", paddingLeft: "2rem", color: "green" }}
          >
            {props.fee}€
          </div>
          <CardActions>
            {isAuthenticated === true && (
              <Button
                size="small"
                className="buttonPopUp"
                onClick={() =>
                  setDisplayProfessionalPopUp(!displayProfessionalPopUp)
                }
              >
                Contratar
              </Button>
            )}
            {isAuthenticated === false && (
              <Button size="small" className="buttonPopUp" disabled={true}>
                Contratar
              </Button>
            )}

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "1rem" }}>Valoración: </h1>
              <div> {props.ratingAverage}</div>
              <div>/{props.ratingTotal} votos</div>
            </div>
          </CardActions>
        </Card>
      )}
    </>
  );
}

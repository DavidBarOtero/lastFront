import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 350
  },
  bullet: {
    display: "flex",
    margin: "0 2px",
    transform: "scale(0.5)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const CoverCard = props => {
  const classes = useStyles();
  return (
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
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <div style={{ fontSize: "1rem", paddingLeft: "2rem", color: "green" }}>
        {props.fee}€
      </div>
      <CardActions>
        <Button size="small" className="buttonPopUp" onClick={props.onClick}>
          Contratar
        </Button>

        <div style={{ display: "flex" }}>
          <h1 style={{ fontSize: ".6rem" }}>Valoración </h1>
          <div> {props.ratingAverage}</div>
          <div>/{props.ratingTotal}</div>
        </div>
      </CardActions>
    </Card>
  );
};

export { CoverCard };

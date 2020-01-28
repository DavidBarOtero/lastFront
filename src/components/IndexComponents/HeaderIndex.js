import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import "./../../assets/css/Index/HeaderIndex.css";
import { useAuth } from "./../Api/auth-requests";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HeaderIndex() {
  const classes = useStyles();
  const { logout } = useAuth();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/index/ProfessionalsFinder">
            <button
              style={{
                textDecoration: "none",
                border: "none",
                fontSize: "1rem"
              }}
            >
              Buscador
            </button>
          </Link>
          <Link to="/index/MyEvents" style={{ textDecoration: "none" }}>
            <button
              style={{
                textDecoration: "none",
                border: "none",
                fontSize: "1rem"
              }}
            >
              Reservas
            </button>
          </Link>

          <button
            style={{ textDecoration: "none", border: "none", fontSize: "1rem" }}
            onClick={logout}
          >
            Logout
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { HeaderIndex };
// function HeaderIndex(props) {
//   const { logout } = useAuth();
//   return (
//     <header className="headerIndex">
//       <div className="botonesHeader">
// <Link to="/index/ProfessionalsFinder">
//   <button style={{ textDecoration: "none" }} className="standarButton">
//     Buscador
//   </button>
// </Link>;
//         <Link to="/index/MyEvents" style={{ textDecoration: "none" }}>
//           <button className="standarButton">Reservas</button>
//         </Link>
//         <button onClick={logout} className="standarButton">
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// }

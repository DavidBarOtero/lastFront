import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAuth } from "./Api/auth-requests";
import { Formik } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import * as Yup from "yup";
import Error from "./Error";
import Typography from "@material-ui/core/Typography";

function AboutCopyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.facebook.com/NiceEvent-107635334108622/?view_public_for=107635334108622"
      >
        Nicevent
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(13),

    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Deber ser un email correcto")
    .min(1, "El email debe ser más largo")
    .max(255, "El email debe ser más corto")
    .required("Introduce un email"),
  password: Yup.string()
    .min(6, "La contraseña debe ser de al menos seis caracteres ")
    .max(255, "La contraseña debe ser más corta")
    .required("Introduce una contraseña para continuar")
});

function FormLogin(props) {
  const classes = useStyles();
  const { signIn } = useAuth();
  return (
    <Formik
      initialValues={{
        email: "davidbarotero@gmail.com",

        password: "esedreik19877"
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid
      }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Bienvenido
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : "null"}
              />
              <Error touched={touched.email} message={errors.email} />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  touched.password && errors.password ? "has-error" : "null"
                }
              />
              <Error touched={touched.password} message={errors.password} />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isValid}
                onClick={() => {
                  signIn(values.email, values.password);
                }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2" onClick={props.onClick}>
                    {"No tienes cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <AboutCopyright />
          </Box>
        </Container>
      )}
    </Formik>
  );
}
export { FormLogin };

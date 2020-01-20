import React from "react";
import { useAuth } from "./Api/auth-requests";
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Error from "./Error";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(1, "El nombre debe ser más largo")
    .max(55, "El nombre debe ser más corto")
    .required("Introduce un nombre para continuar"),
  lastName: Yup.string()
    .min(2, "Los apellidos deben ser más largos")
    .max(55, "Los apellidos deben ser más cortos")
    .required("Introduce tus apellidos para continuar"),
  email: Yup.string()
    .email("Deber ser un email correcto")
    .min(1, "El email debe ser más largo")
    .max(55, "El email debe ser más corto")
    .required("Introduce un email"),
  password: Yup.string()
    .min(6, "La contraseña debe ser de al menos seis caracteres ")
    .max(55, "La contraseña debe ser más corta")
    .required("Introduce una contraseña para continuar")
});
function Copyright() {
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
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function FormRegister(props) {
  const classes = useStyles();
  const { signUp } = useAuth();
  return (
    <Formik
      initialValues={{
        name: "hola",
        lastName: "hol ssdafsdfadsf",
        email: "d@hotmial.com",
        password: "klsdajfñlskdjfñslkdjfñslkfj"
      }}
      validationSchema={Schema}
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
            <Avatar style={{ paddingTop: "0rem" }}></Avatar>
            <Typography component="h1" variant="h5">
              Registarse
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={
                      touched.name && errors.name ? "has-error" : "null"
                    }
                  />
                  <Error touched={touched.name} message={errors.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Apellidos"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={
                      touched.lastName && errors.lastName ? "has-error" : "null"
                    }
                  />
                  <Error touched={touched.lastName} message={errors.lastName} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email "
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? "has-error" : "null"
                    }
                  />
                  <Error touched={touched.email} message={errors.email} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Button
                disabled={!isValid}
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  signUp(
                    values.name,
                    values.lastName,
                    values.email,
                    values.password
                  );
                }}
              >
                Registrarse
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" onClick={props.onClick}>
                    Ya tienes una cuenta? Logueate
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      )}
    </Formik>
  );
}
export { FormRegister };

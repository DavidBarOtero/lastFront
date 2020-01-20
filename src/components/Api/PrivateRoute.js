import React from "react";
import { useAuth } from "./auth-requests";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...others }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...others}>
      {isAuthenticated ? children : <Redirect to="/" />}
    </Route>
  );
}

export { PrivateRoute };

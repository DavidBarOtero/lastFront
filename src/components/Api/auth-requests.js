import axios from "axios";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const currentToken = JSON.parse(localStorage.getItem("currentToken"));
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  const [user, setUser] = useState(currentUser && currentUser.user);
  const [tokenOk, setTokenOk] = useState(currentToken && currentToken.token);
  const history = useHistory();

  const login = async (email, password) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}/api/auth`, {
      auth: {
        email: email,
        password
      }
    });
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/index");
    }
  }, [isAuthenticated]);

  function register({
    name,
    lastName,
    email,
    password,
    profession,
    city,
    fee,
    state
  }) {
    return axios
      .post(`${process.env.REACT_APP_BACKEND}/api/account`, {
        name,
        lastName,
        email,
        password
      })
      .then(res => {
        const result = { ...res.data };
        console.log(result);
      })

      .catch(error => {
        if (error.response.status === 409 || error.response.status === 500) {
          history.push("/");
        }
      });
  }

  async function signIn(email, password) {
    try {
      const {
        data: { tokenOk, expireIn }
      } = await login(email, password);
      setUser(email);
      setIsAuthenticated(true);
      setTokenOk(tokenOk);

      if (tokenOk) {
        history.push("/index");
      }
      console.log(tokenOk);
    } catch (error) {
      console.log("error en front");
      return Promise.reject(error);
    }
  }
  async function signUp(name, lastName, email, password) {
    try {
      await register({
        name,
        lastName,
        email,
        password
      });
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signIn,
        signUp,
        isAuthenticated,
        setIsAuthenticated,
        user,
        tokenOk,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

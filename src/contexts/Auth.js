import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import auth0 from "auth0-js";
import useLocalStorage from "./../../hooks/useLocalStorage";

export const AuthContext = React.createContext([{}, () => {}]);

export const AuthProvider = ({children}) => {
  const [state, setState] = useState({
    isLoading: false,
    isLoggedIn: null,
    currentUser: null
  })

  const [token, setToken] = useLocalStorage("token");

  const auth = new auth0.WebAuth({
    domain: "dev-ti7aizas.auth0.com",
    clientID: "75nq3roajH19I85WsMZ3v17aFz9wUJcn",
    redirectUri: "http://localhost:8080/callback",
    responseType: "token id_token",
    scope: "openid"
  })

  const authorize = (connection) => auth.authorize({
    connection
  });

  const setUser = token => auth.client.userInfo(token, (err, user) => {
    if (user) {
      console.log("user", user);
      setState({user})
    }
    else console.log(err);
  });

  const handleAuthorization = () => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        console.log(authResult);
        setToken(authResult.accessToken);
        setState({ isLoggedIn: true })
        setUser(authResult.accessToken);

        return <Redirect to="/" />;

      } else if (err) {
        console.log(err)
      }
    })
  };

  return (
    <AuthContext.Provider value = {{state, setState, authorize, handleAuthorization}} >
      {children}
    </AuthContext.Provider>
  )
}


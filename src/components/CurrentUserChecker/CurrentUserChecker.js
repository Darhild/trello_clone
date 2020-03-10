import React, { useEffect, useContext } from "react";
import { AuthContext } from "./../../contexts/Auth";
import useLocalStorage from "./../../hooks/useLocalStorage";

const CurrentUserChecker = ({children}) => {
  const {state, setUser} = useContext(AuthContext);
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    setUser(token);
  }, []);

  return (
    <CurrentUserChecker value={state}>
      {children}
    </CurrentUserChecker>
  )
}

export default CurrentUserChecker;

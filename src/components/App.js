import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./../pages/Login/Login";
import Callback from "./../pages/Callback/Callback";
import { AuthProvider } from "../contexts/Auth";
import TestComp from "./TestComp/TestComp";
import CurrentUserChecker from "./CurrentUserChecker/CurrentUserChecker";

const App = () => (
  <AuthProvider>
      <CurrentUserChecker>
        <Router>
          <Switch>
            <Route path="/" exact>
              <TestComp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/callback">
              <Callback />
            </Route>
          </Switch>
        </Router>
      </CurrentUserChecker>
  </AuthProvider>
);

export default App;

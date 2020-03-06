import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./../pages/Login/Login";
import Callback from "./../pages/Callback/Callback";
import { AuthProvider } from "./../contexts/Auth/Auth";

const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          {"Hello"}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/callback">
          <Callback />
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;

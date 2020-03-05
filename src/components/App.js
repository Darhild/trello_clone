import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./../pages/Login/Login";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        {"Hello"}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default App;

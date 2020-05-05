import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'mobx-react';

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import SignInPageRoute from "./Authentication/Routes";

import stores from './stores'

import "./App.css";

const App = () => {
  return (
  <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        {SignInPageRoute}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
};

export default App;

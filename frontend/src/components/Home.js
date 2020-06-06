import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ui } from "../reducers/ui";
import { user } from "../reducers/user";

import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { HomePage } from "../pages/HomePage";
import { Form } from "./Form";
import { About } from "../pages/About";
import { ConnectedGrids } from "../pages/ConnectedGrids";
import { CreatedGrids } from "../pages/CreatedGrids";

export const Home = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    user: user.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/SignUp" component={Form} />
          <Route path="/About" component={About} />
          <Route path="/ConnectedGrids" component={ConnectedGrids} />
          <Route path="/MyGrids" component={CreatedGrids} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

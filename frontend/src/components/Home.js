import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "../reducers/ui";
import { user } from "../reducers/user";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Form } from "./Form";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { ConnectedGrids } from "./ConnectedGrids";
import { CreatedGrids } from "./CreatedGrids";

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

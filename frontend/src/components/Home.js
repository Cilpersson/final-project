import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { ui } from "../reducers/ui";
import { user } from "../reducers/user";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { HomePage } from "../pages/HomePage";
import { Form } from "./Form";
import { About } from "../pages/About";
import { ConnectedGrids } from "../pages/ConnectedGrids";
import { CreatedGrids } from "../pages/CreatedGrids";
import { GridPage } from "pages/GridPage";
import { PageNotFound } from "../pages/PageNotFound";

export const Home = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const reducer = combineReducers({
    ui: ui.reducer,
    user: user.reducer,
  });

  const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };

  const persistedState = loadFromLocalStorage();
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
  );
  store.subscribe(() => saveToLocalStorage(store.getState()));

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
          <Route path="/GridPage/:gridAccessToken" component={GridPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

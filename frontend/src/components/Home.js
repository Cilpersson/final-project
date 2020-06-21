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
import { Footer } from "./Footer";
import { ProjectReflections } from "pages/ProjectReflections";
import { Support } from "../pages/Support";
import { PageWrapper, SiteWrapper } from "lib/stylesheet";

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
    <SiteWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <PageWrapper>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/SignUp" component={Form} exact />
              <Route path="/About" component={About} exact />
              <Route path="/ConnectedGrids" component={ConnectedGrids} exact />
              <Route path="/MyGrids" component={CreatedGrids} exact />
              <Route
                path="/GridPage/:gridAccessToken"
                component={GridPage}
                exact
              />
              <Route
                path="/ProjectReflections"
                component={ProjectReflections}
                exact
              />
              <Route path="/Support" component={Support} exact />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </PageWrapper>
          <Footer />
        </BrowserRouter>
      </Provider>
    </SiteWrapper>
  );
};

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
import styled from "styled-components/macro";
import { ProjectReflections } from "pages/ProjectReflections";
import { Support } from "../pages/Support";

const PageWrapper = styled.section`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='88' height='44' viewBox='0 0 88 44'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.17' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='2' height='2' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%23ffffff' stroke-width='0.17'%3E%3Crect fill='%23fafafa' width='1' height='1'/%3E%3Crect fill='%23ffffff' width='1' height='1' x='1' y='1'/%3E%3Crect fill='%23f5f5f5' width='1' height='1' y='1'/%3E%3Crect fill='%23f0f0f0' width='1' height='1' x='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='b' width='5' height='11' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ebebeb'%3E%3Cuse xlink:href='%23s' x='2' y='0'/%3E%3Cuse xlink:href='%23s' x='4' y='1'/%3E%3Cuse xlink:href='%23s' x='1' y='2'/%3E%3Cuse xlink:href='%23s' x='2' y='4'/%3E%3Cuse xlink:href='%23s' x='4' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='8'/%3E%3Cuse xlink:href='%23s' x='3' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='7' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='3' y='4'/%3E%3Cuse xlink:href='%23s' x='5' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='11' height='5' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ffffff'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='6' y='3'/%3E%3Cuse xlink:href='%23s' x='8' y='2'/%3E%3Cuse xlink:href='%23s' x='3' y='0'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse xlink:href='%23s' x='8' y='3'/%3E%3Cuse xlink:href='%23s' x='4' y='2'/%3E%3Cuse xlink:href='%23s' x='5' y='4'/%3E%3Cuse xlink:href='%23s' x='10' y='0'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='23' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231ed6a2'%3E%3Cuse xlink:href='%23s' x='2' y='5'/%3E%3Cuse xlink:href='%23s' x='23' y='13'/%3E%3Cuse xlink:href='%23s' x='4' y='18'/%3E%3Cuse xlink:href='%23s' x='35' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='61' height='31' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231ed6a2'%3E%3Cuse xlink:href='%23s' x='16' y='0'/%3E%3Cuse xlink:href='%23s' x='13' y='22'/%3E%3Cuse xlink:href='%23s' x='44' y='15'/%3E%3Cuse xlink:href='%23s' x='12' y='11'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='88' height='44'/%3E%3Crect fill='url(%23b)' width='88' height='44'/%3E%3Crect fill='url(%23c)' width='88' height='44'/%3E%3Crect fill='url(%23d)' width='88' height='44'/%3E%3Crect fill='url(%23e)' width='88' height='44'/%3E%3Crect fill='url(%23f)' width='88' height='44'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: repeat;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const SiteWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

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
              <Route path="/ConnectedGrids" component={ConnectedGrids} />
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

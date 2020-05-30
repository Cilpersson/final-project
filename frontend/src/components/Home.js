import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "../reducers/ui";
import { user } from "../reducers/user";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Form } from "./Form";

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
        <Form />
      </BrowserRouter>
    </Provider>
  );
};

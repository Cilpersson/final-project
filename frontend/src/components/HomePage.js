import React from "react";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const name = useSelector((store) => store.user.login.name);

  return <div>Hello {name}, welcome back!</div>;
};

import React from "react";
import { useSelector } from "react-redux";

export const HomePageSignedIn = () => {
  const name = useSelector((store) => store.user.login.name);
  return (
    <>
      <h3>Hello {name}, welcome back!</h3>
      <div></div>
    </>
  );
};

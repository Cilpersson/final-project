import React from "react";
import { useSelector } from "react-redux";
import { Greeting } from "lib/stylesheet";

export const HomePageSignedIn = () => {
  const name = useSelector((store) => store.user.login.name);
  return (
    <>
      <Greeting>Hello {name}, welcome back!</Greeting>
    </>
  );
};

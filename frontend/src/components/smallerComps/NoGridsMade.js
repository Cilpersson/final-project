import React from "react";
import { useSelector } from "react-redux";
import { Greeting } from "lib/stylesheet";

export const NoGridsMade = ({ gridType }) => {
  const name = useSelector((store) => store.user.login.name);
  return (
    <Greeting>
      Hey {name} looks like you haven't {gridType} to any grids yet. Let's get
      started!
    </Greeting>
  );
};

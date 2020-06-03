import React from "react";
import { useSelector } from "react-redux";
import { HomePage } from "components/HomePage";

export const ConnectedGrids = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const connectedGrids = useSelector((store) => store.user.grid.connectedGrids);
  const name = useSelector((store) => store.user.login.name);

  if (accessToken && connectedGrids.length > 0) {
    return (
      <div>
        {connectedGrids.length === 1 ? "This" : "These"} are your created grids:
        {connectedGrids.map((grid) => grid.name)}
      </div>
    );
  } else if (accessToken && connectedGrids.length === 0) {
    return (
      <div>
        Hey {name} looks like you haven't connected to any grids yet. Let's get
        started!
      </div>
    );
  } else {
    return <HomePage />;
  }
};

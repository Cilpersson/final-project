import React from "react";
import { useSelector } from "react-redux";
import { HomePage } from "components/HomePage";

export const CreatedGrids = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const createdGrids = useSelector((store) => store.user.grid.createdGrids);
  const name = useSelector((store) => store.user.login.name);

  if (accessToken && createdGrids.length > 0) {
    return (
      <div>
        {createdGrids.length === 1 ? "This" : "These"} are your created grids:
        {createdGrids.map((grid) => grid.name)}
      </div>
    );
  } else if (accessToken && createdGrids.length === 0) {
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

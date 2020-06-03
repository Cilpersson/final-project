import React from "react";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";
import { HomePage } from "components/HomePage";
import { CreateConnectGrid } from "components/CreateConnectGrid";

export const ConnectedGrids = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const connectedGrids = useSelector((store) => store.user.grid.connectedGrids);
  const name = useSelector((store) => store.user.login.name);

  if (accessToken && connectedGrids.length > 0) {
    return (
      <>
        <div>
          {connectedGrids.length === 1 ? "This" : "These"} are the grids you
          have connected to:
          <ul>
            {connectedGrids.map((grid) => {
              return <li key={uuid()}>{grid.name}</li>;
            })}
          </ul>
        </div>
        <CreateConnectGrid
          createG={false}
          buttonText="Connect to grid"
          labelText="Accesstoken"
        />
      </>
    );
  } else if (accessToken && connectedGrids.length === 0) {
    return (
      <>
        <div>
          Hey {name} looks like you haven't connected to any grids yet. Let's
          get started!
        </div>
        <CreateConnectGrid
          createG={false}
          buttonText="Connect to grid"
          labelText="Accesstoken"
        />
      </>
    );
  } else {
    return <HomePage />;
  }
};

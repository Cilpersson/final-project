import React from "react";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";
import { HomePage } from "components/HomePage";
import { CreateConnectGrid } from "components/CreateConnectGrid";

export const CreatedGrids = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const createdGrids = useSelector((store) => store.user.grid.createdGrids);
  const name = useSelector((store) => store.user.login.name);

  if (accessToken && createdGrids.length > 0) {
    return (
      <>
        <div>
          {createdGrids.length === 1 ? "This" : "These"} are your created grids:
          <ul>
            {createdGrids.map((grid) => {
              return <li key={uuid()}>{grid.name}</li>;
            })}
          </ul>
        </div>
        <CreateConnectGrid
          createG={true}
          buttonText="Create grid"
          labelText="Grid name"
        />
      </>
    );
  } else if (accessToken && createdGrids.length === 0) {
    return (
      <>
        <div>
          Hey {name} looks like you haven't connected to any grids yet. Let's
          get started!
        </div>
        <CreateConnectGrid
          createG={true}
          buttonText="Create grid"
          labelText="Grid name"
        />
      </>
    );
  } else {
    return <HomePage />;
  }
};

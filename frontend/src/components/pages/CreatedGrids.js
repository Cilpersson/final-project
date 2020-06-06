import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { accessGrid } from "reducers/user";
import { HomePage } from "components/pages/HomePage";
import { GridPage } from "components/pages/GridPage";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import { Greeting, Paragraph } from "lib/stylesheet";

export const CreatedGrids = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const createdGrids = useSelector((store) => store.user.grid.createdGrids);
  const name = useSelector((store) => store.user.login.name);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const handleOnClick = (gridAccessToken) => {
    dispatch(accessGrid(gridAccessToken));
  };

  if (currentGrid !== null) {
    return <GridPage />;
  } else if (accessToken && createdGrids.length > 0) {
    return (
      <>
        <Greeting>
          {createdGrids.length === 1 ? "This" : "These"} are your created grids:
          <ul>
            {createdGrids.map((grid) => {
              return (
                <button
                  key={uuid()}
                  onClick={() => handleOnClick(grid.accessToken)}>
                  <li key={uuid()}>{grid.name}</li>
                </button>
              );
            })}
          </ul>
        </Greeting>
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
        <Greeting>
          Hey {name} looks like you haven't created any grids yet. Let's get
          started!
        </Greeting>
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

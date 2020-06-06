import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { accessGrid } from "reducers/user";
import { HomePage } from "pages/HomePage";
import { GridPage } from "pages/GridPage";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import { Greeting, StyledButton } from "lib/stylesheet";

export const ConnectedGrids = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const connectedGrids = useSelector((store) => store.user.grid.connectedGrids);
  const name = useSelector((store) => store.user.login.name);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const handleOnClick = (gridAccessToken) => {
    dispatch(accessGrid(gridAccessToken));
  };

  if (currentGrid !== null) {
    return <GridPage />;
  } else if (accessToken && connectedGrids.length > 0 && currentGrid === null) {
    return (
      <>
        <Greeting>
          {connectedGrids.length === 1 ? "This" : "These"} are your connected
          grids:
          <ul>
            {connectedGrids.map((grid) => {
              return (
                <StyledButton
                  key={uuid()}
                  onClick={() => handleOnClick(grid.accessToken)}>
                  <li key={uuid()}>{grid.name}</li>
                </StyledButton>
              );
            })}
          </ul>
        </Greeting>
        <CreateConnectGrid
          createG={false}
          buttonText="Connect to grid"
          labelText="Accesstoken"
        />
      </>
    );
  } else if (
    accessToken &&
    connectedGrids.length === 0 &&
    currentGrid === null
  ) {
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

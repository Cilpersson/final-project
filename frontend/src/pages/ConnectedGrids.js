import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { accessGrid } from "reducers/user";
import { HomePage } from "pages/HomePage";
import { GridPage } from "pages/GridPage";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import { Greeting, StyledButton, Wrapper, Ul } from "lib/stylesheet";

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
      <Wrapper>
        <Greeting>
          {connectedGrids.length === 1 ? "This" : "These"} are your connected
          grids:
        </Greeting>
        <Ul>
          {connectedGrids.map((grid) => {
            return (
              <StyledButton
                key={uuid()}
                onClick={() => handleOnClick(grid.accessToken)}>
                <li key={uuid()}>{grid.name}</li>
              </StyledButton>
            );
          })}
        </Ul>
        <CreateConnectGrid
          legend="Connect to a new grid!"
          createG={false}
          buttonText="Connect"
          labelText="Accesstoken"
        />
      </Wrapper>
    );
  } else if (accessToken && connectedGrids.length === 0) {
    return (
      <Wrapper>
        <Greeting>
          Hey {name} looks like you haven't connected to any grids yet. Let's
          get started!
        </Greeting>
        <CreateConnectGrid
          legend="Connect to a new grid!"
          createG={false}
          buttonText="Connect to grid"
          labelText="Accesstoken"
        />
      </Wrapper>
    );
  } else {
    return <HomePage />;
  }
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { accessGrid } from "reducers/user";
import { HomePage } from "pages/HomePage";
import { GridPage } from "pages/GridPage";
import { Grid } from "../components/logo/Grid";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import {
  Greeting,
  StyledButton,
  Wrapper,
  Ul,
  SectionWrapper,
} from "lib/stylesheet";

const StyledGreeting = styled(Greeting)`
  padding: 1.4rem 0 0.8rem;
`;

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
      <SectionWrapper>
        <Grid />
        <CreateConnectGrid
          legend="Create a new grid!"
          createG={true}
          buttonText="Connect"
          labelText="Grid name"
        />
        <StyledGreeting>
          {createdGrids.length === 1 ? "This" : "These"} are your created grids:
        </StyledGreeting>
        <Ul>
          {createdGrids.map((grid) => {
            return (
              <StyledButton
                key={uuid()}
                onClick={() => handleOnClick(grid.accessToken)}>
                <li key={uuid()}>{grid.name}</li>
              </StyledButton>
            );
          })}
        </Ul>
      </SectionWrapper>
    );
  } else if (accessToken && createdGrids.length === 0) {
    return (
      <Wrapper>
        <Greeting>
          Hey {name} looks like you haven't created any grids yet. Let's get
          started!
        </Greeting>
        <CreateConnectGrid
          legend="Create a new grid!"
          createG={true}
          buttonText="Create"
          labelText="Grid name"
        />
      </Wrapper>
    );
  } else {
    return <HomePage />;
  }
};

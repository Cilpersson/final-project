import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { accessGrid } from "reducers/user";
import { Form } from "components/Form";

import { Grid } from "../components/logo/Grid";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import {
  Greeting,
  StyledButton,
  Wrapper,
  Ul,
  SectionWrapper,
  ButtonText,
} from "lib/stylesheet";
import { useHistory } from "react-router";
import { LottiePlayer } from "components/LottiePlayer";
import animationCamera from "../images_animations/animations/camera.json";

const StyledGreeting = styled(Greeting)`
  padding: 1.4rem 0 0.8rem;
`;

export const ConnectedGrids = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const connectedGrids = useSelector((store) => store.user.grid.connectedGrids);
  const name = useSelector((store) => store.user.login.name);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const [width, setWidth] = useState(window.innerWidth);
  const [didMount, setDidMount] = useState(false);

  const handleOnClick = (gridAccessToken) => {
    dispatch(accessGrid(gridAccessToken));
  };

  //Gets width of screen on rezise
  useEffect(() => {
    setDidMount(true);
    if (didMount) {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }
    return setDidMount(false);
  }, []);

  useEffect(() => {
    if (currentGrid !== null) {
      history.push(`/GridPage/${currentGrid.accessToken}`);
    }
  }, [currentGrid, history]);

  if (accessToken && connectedGrids.length > 0 && currentGrid === null) {
    return (
      <SectionWrapper>
        <Grid />
        <CreateConnectGrid
          legend="Connect to a new grid!"
          createG={false}
          buttonText="Connect"
          labelText="Accesstoken"
        />
        <StyledGreeting>
          {connectedGrids.length === 1 ? "This is" : "These are"} your connected
          {connectedGrids.length === 1 ? " grid" : " grids"}:
        </StyledGreeting>
        <Ul>
          {connectedGrids.map((grid) => {
            return (
              <StyledButton
                key={uuid()}
                onClick={() => handleOnClick(grid.accessToken)}>
                <li key={uuid()}>
                  <ButtonText>{grid.name}</ButtonText>
                </li>
              </StyledButton>
            );
          })}
        </Ul>
      </SectionWrapper>
    );
  } else if (accessToken && connectedGrids.length === 0) {
    return (
      <SectionWrapper>
        <Grid />
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
        {ConnectedGrids.length === 0 && (
          <LottiePlayer
            animation={animationCamera}
            height={width > 668 ? "30%" : "50%"}
            width={width > 668 ? "30%" : "50%"}
          />
        )}
      </SectionWrapper>
    );
  } else {
    return <Form />;
  }
};

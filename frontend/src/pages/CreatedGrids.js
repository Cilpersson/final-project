import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { useHistory } from "react-router-dom";
import { accessGrid } from "reducers/user";
import { Form } from "components/Form";
import { Grid } from "../components/logo/Grid";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import {
  StyledGreeting,
  StyledButton,
  Wrapper,
  Ul,
  SectionWrapper,
  ButtonText,
  Greeting,
  Li,
} from "lib/stylesheet";
import { LottiePlayer } from "components/LottiePlayer";
import animationCamera from "../images_animations/animations/camera.json";

export const CreatedGrids = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const createdGrids = useSelector((store) => store.user.grid.createdGrids);
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
  }, [didMount]);

  useEffect(() => {
    if (currentGrid === "DELETED") {
      history.push("/MyGrids");
    } else if (currentGrid !== null) {
      history.push(`/GridPage/${currentGrid.accessToken}`);
    }
  }, [currentGrid, history]);

  if (accessToken && createdGrids.length > 0) {
    return (
      <SectionWrapper>
        <Grid />
        <CreateConnectGrid
          legend="Create a new grid!"
          createG={true}
          buttonText="Create"
          labelText="Grid name"
        />
        <StyledGreeting>
          {createdGrids.length === 1 ? "This is" : "These are"} your created{" "}
          {createdGrids.length === 1 ? "grid" : "grids"}:
        </StyledGreeting>
        <Ul>
          {createdGrids.map((grid) => {
            return (
              <StyledButton
                key={uuid()}
                onClick={() => handleOnClick(grid.accessToken)}>
                <Li key={uuid()}>
                  <ButtonText>{grid.name}</ButtonText>
                </Li>
              </StyledButton>
            );
          })}
        </Ul>
      </SectionWrapper>
    );
  } else if (accessToken && createdGrids.length === 0) {
    return (
      <SectionWrapper>
        <Grid />
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
        {createdGrids.length === 0 && (
          <LottiePlayer
            animation={animationCamera}
            height={width > 668 ? "20%" : "40%"}
            width={width > 668 ? "20%" : "40%"}
          />
        )}
      </SectionWrapper>
    );
  } else {
    return <Form />;
  }
};

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "components/Form";
import { Grid } from "../components/logo/Grid";
import { CreateConnectGrid } from "components/CreateConnectGrid";
import { Wrapper, SectionWrapper } from "lib/stylesheet";
import { useHistory } from "react-router";
import { LottiePlayer } from "components/LottiePlayer";
import animationCamera from "../images_animations/animations/camera.json";
import { GridInfo } from "components/smallerComps/GridInfo";
import { AllGridsForUser } from "components/smallerComps/AllGridsForUser";
import { NoGridsMade } from "components/smallerComps/NoGridsMade";

export const ConnectedGrids = () => {
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const connectedGrids = useSelector((store) => store.user.grid.connectedGrids);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const [width, setWidth] = useState(window.innerWidth);
  const [didMount, setDidMount] = useState(false);

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
        <GridInfo gridArr={connectedGrids} gridType="connected" />
        <AllGridsForUser gridArr={connectedGrids} />
      </SectionWrapper>
    );
  } else if (accessToken && connectedGrids.length === 0) {
    return (
      <SectionWrapper>
        <Grid />
        <Wrapper>
          <NoGridsMade gridType="connected" />
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

import React from "react";
import { useSelector } from "react-redux";
import { LottiePlayer } from "../components/LottiePlayer";
import animation from "../images_animations/animations/404.json";
import { Greeting, SectionWrapper, RelativeWrapper } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import styled from "styled-components/macro";

const NotFound = styled(RelativeWrapper)`
  margin-bottom: 0.4rem;
`;
export const PageNotFound = () => {
  const name = useSelector((store) => store.user.login.name);

  return (
    <SectionWrapper>
      <NotFound>
        <Grid />
        <Greeting>Oh no {name}, looks like we messed up!</Greeting>
      </NotFound>
      <LottiePlayer animation={animation} height="50%" width="50%" />
    </SectionWrapper>
  );
};

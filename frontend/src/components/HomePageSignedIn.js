import React from "react";
import { useSelector } from "react-redux";
import { LottiePlayer } from "./LottiePlayer";
import animation from "../images_animations/animations/welcome.json";
import { Greeting, SectionWrapper, RelativeWrapper } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";

export const HomePageSignedIn = () => {
  const name = useSelector((store) => store.user.login.name);
  const firstSignUp = useSelector((store) => store.user.login.firstSignUp);

  return (
    <SectionWrapper>
      <RelativeWrapper>
        <Grid />
        <Greeting>
          Hello {name}, welcome {firstSignUp ? "to PHOTO GRID" : "back"}!
        </Greeting>
      </RelativeWrapper>
      <LottiePlayer animation={animation} height="50%" width="50%" />
    </SectionWrapper>
  );
};

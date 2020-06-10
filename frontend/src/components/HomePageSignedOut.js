import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Greeting, Paragraph, SectionWrapper } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import { WelcomeGrid } from "./WelcomeGrid";
import { WelcomeGridAlternative } from "./WelcomeGridAlternative";

export const HomePageSignedOut = () => {
  return (
    <>
      <SectionWrapper>
        <Grid />
        <Greeting>Welcome to PHOTO GRID</Greeting>
        <Paragraph>
          PHOTO GRID changes the way we view social media. This is a platform
          where you decide who can see your images. You create grids and you
          decide who can access them. Start by signing up, then you can make
          your first grid. You can either keep it for yourself or share the
          password with others.
        </Paragraph>
      </SectionWrapper>
      <WelcomeGridAlternative />
      {/* <WelcomeGrid /> */}
    </>
  );
};

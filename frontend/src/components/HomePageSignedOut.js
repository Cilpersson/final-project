import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Greeting, Paragraph } from "lib/stylesheet";
import { WelcomeGrid } from "./WelcomeGrid";

export const HomePageSignedOut = () => {
  return (
    <>
      <Greeting>Welcome to PHOTO GRID</Greeting>
      <Paragraph>
        PHOTO GRID changes the way we view social media. This is a platform
        where you decide who can see your images. You create grids and you
        decide who can access them.
      </Paragraph>
      <Paragraph>
        Start by signing up, then you can make your first grid. You can either
        keep it for yourself or share the password with others.
      </Paragraph>
      <WelcomeGrid />
    </>
  );
};

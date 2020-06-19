import React from "react";
import { useSelector } from "react-redux";
import { LottiePlayer } from "components/LottiePlayer";
import animationLoader from "../../images_animations/animations/loader.json";
import { PasswordInfo } from "lib/stylesheet";

export const Loader = ({ text }) => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  return (
    <>
      {isLoading && (
        <>
          <LottiePlayer animation={animationLoader} height="25%" width="25%" />
          <PasswordInfo>{text ? text : ""}</PasswordInfo>
        </>
      )}
    </>
  );
};

import React from "react";
import Lottie from "lottie-react-web";
import animation from "../images_animations/animations/welcome.json";
import { AbsoluteWrapper } from "lib/stylesheet";

export const LottiePlayer = () => {
  return (
    <Lottie
      options={{
        animationData: animation,
      }}
      height="50%"
      width="50%"
    />
  );
};

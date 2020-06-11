import React from "react";
import Lottie from "lottie-react-web";

export const LottiePlayer = ({ animation, height, width }) => {
  return (
    <Lottie
      options={{
        animationData: animation,
      }}
      height={height}
      width={width}
    />
  );
};

import React from "react";

export const LightboxButton = ({ onClick, btnTxt }) => {
  return <button onClick={onClick}>{btnTxt}</button>;
};

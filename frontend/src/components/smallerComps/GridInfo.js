import React from "react";
import { StyledGreeting } from "lib/stylesheet";

export const GridInfo = ({ gridArr, gridType }) => {
  return (
    <StyledGreeting>
      {gridArr.length === 1 ? "This is" : "These are"} your {gridType}
      {gridArr.length === 1 ? " grid" : " grids"}:
    </StyledGreeting>
  );
};

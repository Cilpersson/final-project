import React from "react";
import { useSelector } from "react-redux";
import { GridNotNull } from "components/GridNotNull";
import { GridNull } from "components/GridNull";

export const GridNullCheck = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  if (currentGrid !== null) {
    return <GridNotNull />;
  } else {
    return <GridNull />;
  }
};

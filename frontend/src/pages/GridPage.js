import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GridNotNull } from "components/GridNotNull";
import { GridNull } from "components/GridNull";
import { useHistory } from "react-router";

export const GridPage = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  if (currentGrid !== null && currentGrid !== false) {
    return <GridNotNull />;
  } else {
    return <GridNull />;
  }
};

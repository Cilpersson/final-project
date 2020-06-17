import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GridNullCheck } from "components/GridNullCheck";
import { useHistory } from "react-router";
import { CreatedGrids } from "./CreatedGrids";

export const GridPage = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const history = useHistory();

  useEffect(() => {
    if (currentGrid === "DELETED") {
      history.push("/MyGrids");
    }
  }, [currentGrid, history]);

  if (currentGrid === "DELETED") {
    return <CreatedGrids />;
  } else {
    return <GridNullCheck />;
  }
};

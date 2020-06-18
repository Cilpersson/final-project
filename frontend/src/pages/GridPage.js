import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { user } from "../reducers/user";
import { GridNullCheck } from "components/GridNullCheck";
import { useHistory } from "react-router";
import { CreatedGrids } from "./CreatedGrids";
import { ConnectedGrids } from "./ConnectedGrids";

export const GridPage = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentGrid === "DELETED") {
      dispatch(user.actions.setCurrentGrid({ currentGrid: null }));
      history.push("/MyGrids");
    } else if (currentGrid === "LEFT_GRID") {
      dispatch(user.actions.setCurrentGrid({ currentGrid: null }));
      history.push("/ConnectedGrids");
    }
  }, [currentGrid, history]);

  if (currentGrid === "DELETED") {
    return <CreatedGrids />;
  } else if (currentGrid === "LEFT_GRID") {
    return <ConnectedGrids />;
  } else {
    return <GridNullCheck />;
  }
};

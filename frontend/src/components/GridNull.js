import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { connectToGrid } from "reducers/user";
import { useHistory } from "react-router";

export const GridNull = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const regex = /\/GridPage\//gi;
  const URL_path = window.location.pathname;
  const URL_gridAccessToken = URL_path.replace(regex, "");

  useEffect(() => {
    if (currentGrid === null) {
      dispatch(connectToGrid(URL_gridAccessToken));
      history.push(`/ConnectedGrids`);
    }
  }, [URL_path, currentGrid, URL_gridAccessToken, dispatch, history]);
  return <></>;
};

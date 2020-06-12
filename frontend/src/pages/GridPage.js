import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { connectToGrid } from "reducers/user";
import { Paragraph } from "lib/stylesheet";
import { useHistory } from "react-router";
import { GridNotNull } from "components/GridNotNull";

const GridFormP = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem #074835;
  color: #ffffff;
  font-size: 1.1rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`;

export const GridPage = () => {
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
  }, [URL_path, currentGrid]);

  if (currentGrid !== null) {
    return <GridNotNull />;
  } else {
    return <div></div>;
  }
};

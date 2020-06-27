import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { ItalicGreeting } from "lib/stylesheet";

export const GridGreeting = () => {
  const userId = useSelector((store) => store.user.login.userId);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const gridCheck = () => {
    if (currentGrid.createdBy === userId) {
      return `You created this grid ${moment(currentGrid.createdAt).fromNow()}`;
    } else {
      return `Grid created by ${currentGrid.gridOwner} ${moment(
        currentGrid.createdAt
      ).fromNow()}`;
    }
  };
  return <ItalicGreeting>{gridCheck()} </ItalicGreeting>;
};

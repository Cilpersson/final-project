import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";

export const GridPage = () => {
  const dispatch = useDispatch();
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  return (
    <>
      <h2>{currentGrid.name}</h2>
      <ul>
        {currentGrid.imgList.map((img) => {
          return <img src={img.imageUrl} />;
        })}
      </ul>
    </>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";

export const GridPage = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  return (
    <>
      <h2>{currentGrid.name}</h2>
      <ul>
        {currentGrid.imgList.map((img) => {
          return (
            <img
              key={uuid()}
              src={img.imageUrl}
              alt={`Uploaded image from ${currentGrid.name}`}
            />
          );
        })}
      </ul>
    </>
  );
};

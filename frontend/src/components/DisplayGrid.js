import React from "react";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";
import { CardTall, CardWide, Card, PhotoGrid } from "lib/stylesheet";

export const DisplayGrid = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  return (
    <>
      {currentGrid.imgList.length > 0 && (
        <PhotoGrid>
          {currentGrid.imgList.map((item) => {
            if (item.height / item.width > 1) {
              return <CardTall img={item.src} key={uuid()} />;
            } else if (item.height / item.width < 1) {
              return <CardWide img={item.src} key={uuid()} />;
            } else {
              return <Card img={item.src} key={uuid()} />;
            }
          })}
        </PhotoGrid>
      )}
    </>
  );
};

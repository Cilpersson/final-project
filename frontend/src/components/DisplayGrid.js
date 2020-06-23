import React, { useState, useEffect } from "react";
// Hook written by: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj pretty cool stuff
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";
import {
  CardTall,
  CardWide,
  Card,
  PhotoGrid,
  CardTinyTall,
  CardTinyWide,
} from "lib/stylesheet";

export const DisplayGrid = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window]);

  useScrollPosition(({ prevPos, currPos }) => {
    setYOffset(Math.abs(currPos.y));
  });

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const lightBox = (image) => {
    setImage(image);
  };

  if (currentGrid.imgList.length < 10) {
    return (
      <>
        <SmallPhotoGrid>
          {currentGrid.imgList.map((item) => {
            return <FlexCard img={item.src} key={uuid()} />;
          })}
        </SmallPhotoGrid>
      </>
    );
  } else {
    return (
      <>
        {image !== null && (
          <Background onClick={() => setImage(null)} top={yOffset}>
            <Image img={image} />
          </Background>
        )}
        <PhotoGrid>
          {currentGrid.imgList.map((item, index) => {
            if (item.height / item.width > 1) {
              if (index % 2 !== 0) {
                return (
                  <CardTall
                    onClick={() => lightBox(item.src)}
                    img={item.src}
                    key={uuid()}
                  />
                );
              } else {
                return (
                  <CardTinyTall
                    onClick={() => lightBox(item.src)}
                    img={item.src}
                    key={uuid()}
                  />
                );
              }
            } else if (item.height / item.width < 1) {
              if (index % 2 !== 0) {
                return (
                  <CardWide
                    onClick={() => lightBox(item.src)}
                    img={item.src}
                    key={uuid()}
                  />
                );
              } else {
                return (
                  <CardTinyWide
                    onClick={() => lightBox(item.src)}
                    img={item.src}
                    key={uuid()}
                  />
                );
              }
            } else {
              return (
                <Card
                  onClick={() => lightBox(item.src)}
                  img={item.src}
                  key={uuid()}
                />
              );
            }
          })}
        </PhotoGrid>
      </>
    );
  }
};

const Image = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});

  margin: auto;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  height: 90%;
  width: 90%;

  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;

  @media (min-width: 668px) {
    height: 50%;
    width: 50%;
  }
`;

const Button = styled.button`
  z-index: 30;
  top: 0;
  right: 0;
  position: absolute;
  margin: 1rem;
  width: 2rem;
`;

const Background = styled.section`
  background: #00000099;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  position: absolute;
  top: ${(props) => props.top}px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 100%;
  width: 100vw;

  overflow-y: hidden;
`;

const SmallPhotoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;

  width: 90%;
  background: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
`;

export const FlexCard = styled.div`
  width: 240px;
  height: 240px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: center;
  padding: 1rem;
  border-radius: 0.2rem;
`;

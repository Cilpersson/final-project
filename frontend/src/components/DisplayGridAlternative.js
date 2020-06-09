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

export const DisplayGridAlternative = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window]);

  useScrollPosition(({ prevPos, currPos }) => {
    setYOffset(Math.abs(currPos.y));
    console.log(yOffset);
  });

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const lightBox = (image) => {
    setImage(image);
  };

  return (
    <>
      {image !== null && (
        <Background onClick={() => setImage(null)} top={yOffset}>
          <Image img={image} loading="lazy" />
        </Background>
      )}
      <Ul>
        {currentGrid.imgList.map((item, index) => {
          return (
            <Li>
              <Img src={item.src} onClick={() => lightBox(item.src)} />
            </Li>
          );
        })}
        <FinalLI></FinalLI>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: auto;
  padding: 2rem;
  background: white;

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    flex-direction: row;
  }
`;

const Li = styled.li`
  height: 25vh;
  flex-grow: 1;
  margin: 0.5rem;
  display: flex;
  border-radius: 0.2rem;
  cursor: pointer;

  @media (max-aspect-ratio: 1/1) {
    height: 25vh;
  }
  @media (max-height: 668px) {
    height: 25vh;
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    height: auto;
    width: 100%;
  }
`;

const FinalLI = styled.li`
  flex-grow: 10;
`;

const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  align-items: center;
  justify-content: center;

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
`;

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

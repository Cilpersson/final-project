import React, { useState, useEffect } from "react";
// Hook written by: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";

const LightboxButton = styled.button`
  border: none;
  background: none;
  color: #fff;

  position: absolute;
  font-size: ${(props) => props.size};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin: ${(props) => props.margin};
  cursor: pointer;
  opacity: 0.4;
  transition: all 0.2s;

  &:hover {
    color: #84eccf;
    opacity: 1;
  }

  @media (min-width: 668px) {
    margin: ${(props) => props.marginMedia};
  }
`;

export const DisplayGridAlternative = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const [yOffset, setYOffset] = useState(0);
  let [imgIndex, setImgIndex] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useScrollPosition(({ prevPos, currPos }) => {
    setYOffset(Math.abs(currPos.y));
  });

  return (
    <>
      {currentGrid.imgList.length !== 0 && (
        <>
          {image !== null && (
            <Background top={yOffset}>
              {/* BACK BUTTON STARTS HERE */}

              <LightboxButton
                right="50%"
                bottom="3rem"
                size="2.5rem"
                margin="0 1rem 0 0"
                // marginMedia="0 0 0 15rem"
                onClick={() => {
                  imgIndex === 0
                    ? setImgIndex(currentGrid.imgList.length - 1)
                    : setImgIndex(imgIndex - 1);
                  console.log("This is the local index state: ", imgIndex);
                  setImage(currentGrid.imgList[imgIndex].src);
                }}>
                <FontAwesomeIcon icon={faBackward} />
              </LightboxButton>

              {/* EXIT BUTTON STARTS HERE */}
              <LightboxButton
                top="1.5rem"
                right="1.5rem"
                size="3rem"
                margin=""
                marginMedia="0 auto"
                onClick={() => setImage(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </LightboxButton>
              <Image img={image} loading="lazy" />

              {/* NEXT BUTTON STARTS HERE */}
              <LightboxButton
                left="50%"
                bottom="3rem"
                size="2.5rem"
                margin="0 0 0 1rem"
                // marginMedia="0 15rem 0 0"
                onClick={() => {
                  imgIndex === currentGrid.imgList.length - 1
                    ? setImgIndex(0)
                    : setImgIndex(imgIndex + 1);
                  console.log("This is the local index state: ", imgIndex);
                  setImage(currentGrid.imgList[imgIndex].src);
                }}>
                <FontAwesomeIcon icon={faForward} />
              </LightboxButton>
            </Background>
          )}
          <Ul>
            {currentGrid.imgList.map((item, index) => {
              return (
                <Li key={uuid()}>
                  <Img
                    onClick={() => {
                      setImage(item.src);
                      setImgIndex(index);
                      console.log("This is the local index state: ", imgIndex);

                      console.log("This is the current index: ", index);
                    }}
                    src={item.src}
                  />
                </Li>
              );
            })}
            <FinalLI></FinalLI>
          </Ul>
        </>
      )}
    </>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  margin: 1.5rem;
  background: white;

  @media (min-width: 668px) {
    width: 75%;
    margin: 1.5rem auto;
  }

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

  height: 80%;
  width: 80%;

  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;

  @media (min-width: 668px) {
    height: 60%;
    width: 60%;
  }
`;

const Background = styled.section`
  background: rgba(0, 0, 0, 0.8);

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 1rem;

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

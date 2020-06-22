import React, { useState, useEffect } from "react";
// Hook written by: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {
  faForward,
  faBackward,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { LightboxButton } from "components/smallerComps/LightboxButton";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";
import { WrapperCol } from "lib/stylesheet";
import { PaginationImages } from "./smallerComps/PaginationImages";

const WrapperGrid = styled(WrapperCol)`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 1.5rem 0 1.5rem;
  padding: 1.5rem;
  background: white;

  @media (min-width: 668px) {
    width: 75%;
    margin: 1.5rem auto;
    padding: 1.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background: white;

  @media (min-width: 668px) {
    width: 100%;
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    flex-direction: row;
  }
`;
//15-50 vh for height in LI
const Li = styled.li`
  height: 25vh;
  height: ${(props) => props.height}vh;
  flex-grow: 1;
  margin: 0.5rem;
  display: flex;
  border-radius: 0.2rem;
  cursor: pointer;

  /* @media (max-aspect-ratio: 1/1) {
    height: 25vh;
  } */
  @media (max-height: 668px) {
    height: 5vh;
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    height: auto;
    height: 5vh;
    width: 100%;
  }
  @media (max-width: 668px) {
    height: 10vh;
    width: 25%;
  }
`;

const FinalLI = styled.li`
  flex-grow: 10;
`;

const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  align-items: center;
  justify-content: center;

  cursor: pointer;

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
  bottom: -100px;
  left: 0;
  right: 0;
  z-index: 20;
  height: 100%;
  width: 100vw;
`;

export const DisplayGridAlternative = ({
  sliderValue,
  currentPage,
  setCurrentPage,
}) => {
  const currentGridImages = useSelector(
    (store) => store.user.grid.currentGridImages
  );
  const [image, setImage] = useState(null);
  const [yOffset, setYOffset] = useState(0);
  const [imgIndex, setImgIndex] = useState(null);

  useScrollPosition(({ prevPos, currPos }) => {
    setYOffset(Math.abs(currPos.y));
  });

  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [image]);

  return (
    <>
      {currentGridImages.length !== 0 && (
        <WrapperGrid>
          <>
            {image !== null && (
              <Background top={yOffset}>
                <LightboxButton
                  right="50%"
                  bottom="3rem"
                  size="2.5rem"
                  margin="0 1rem 0 0"
                  bottomMobile="0rem"
                  icon={faBackward}
                  onClick={() => {
                    //If imgIndex = 0 => -1 + currentGrid.imgList.length => Shows last image in the array!
                    const newImgIndex =
                      (imgIndex - 1 + currentGridImages.length) %
                      currentGridImages.length;
                    setImage(currentGridImages[newImgIndex].src);
                    setImgIndex(newImgIndex);
                  }}
                />
                <LightboxButton
                  top="1.5rem"
                  right="1.5rem"
                  size="3rem"
                  margin=""
                  marginMedia="0 auto"
                  topMobile="0rem"
                  onClick={() => setImage(null)}
                  icon={faTimes}
                />
                <Image img={image} loading="lazy" />
                <LightboxButton
                  left="50%"
                  bottom="3rem"
                  size="2.5rem"
                  margin="0 0 0 1rem"
                  bottomMobile="0rem"
                  icon={faForward}
                  onClick={() => {
                    const newImgIndex =
                      (imgIndex + 1) % currentGridImages.length;
                    setImage(currentGridImages[newImgIndex].src);
                    setImgIndex(newImgIndex);
                  }}
                />
              </Background>
            )}
            <>
              <>
                <PaginationImages
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
              <Ul>
                {currentGridImages.map((item, index) => {
                  return (
                    <Li
                      height={sliderValue}
                      key={uuid()}
                      onClick={() => {
                        setImage(item.src);
                        setImgIndex(index);
                      }}>
                      <Img src={item.src} />
                    </Li>
                  );
                })}
                <FinalLI></FinalLI>
              </Ul>
            </>
          </>
        </WrapperGrid>
      )}
    </>
  );
};

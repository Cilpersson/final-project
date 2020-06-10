import React, { useState, useEffect } from "react";
// Hook written by: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj pretty cool stuff
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";

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
  }, [window]);

  useScrollPosition(({ prevPos, currPos }) => {
    setYOffset(Math.abs(currPos.y));
  });

  const lightBox = (image) => {};

  return (
    <>
      {currentGrid.imgList.length !== 0 && (
        <>
          {image !== null && (
            <Background top={yOffset}>
              {/* BACK BUTTON STARTS HERE */}
              <button
                onClick={() => {
                  imgIndex === 0
                    ? setImgIndex(currentGrid.imgList.length - 1)
                    : setImgIndex(imgIndex - 1);
                  console.log("This is the local index state: ", imgIndex);
                  setImage(currentGrid.imgList[imgIndex].src);
                }}>
                back
              </button>

              {/* EXIT BUTTON STARTS HERE */}
              <button onClick={() => setImage(null)}>exit</button>
              <Image img={image} loading="lazy" />

              {/* NEXT BUTTON STARTS HERE */}
              <button
                onClick={() => {
                  imgIndex === currentGrid.imgList.length - 1
                    ? setImgIndex(0)
                    : setImgIndex(imgIndex + 1);
                  console.log("This is the local index state: ", imgIndex);
                  setImage(currentGrid.imgList[imgIndex].src);
                }}>
                next
              </button>
            </Background>
          )}
          <Ul>
            {currentGrid.imgList.map((item, index) => {
              return (
                <Li key={uuid()}>
                  <Img
                    onClick={() => {
                      setImgIndex(index);
                      console.log("This is the local index state: ", imgIndex);
                      setImage(item.src);
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
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
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
// return (
//   <>
//     {currentGrid.imgList.length !== 0 && (
//       <>
//         {image !== null && (
//           <Background
//             // onClick={() => setImage(null)}
//             top={yOffset}>
//             {/* <button
//               onClick={() => {
//                 setImgIndex(imgIndex--);
//                 setImage(currentGrid.imgList[imgIndex]);
//                 console.log(image);
//               }}>
//               back
//             </button> */}
//             <Image img={image} loading="lazy" />
//             {/* <button onClick={setImage((imgIndex = imgIndex + 1))}>
//               next
//             </button> */}
//           </Background>
//         )}
//         <Ul>
//           {currentGrid.imgList.map((item, index) => {
//             return (
//               <Li key={uuid()}>
//                 <Img
//                   src={item.src}
//                   onClick={() => {
//                     // console.log(index);
//                     setImgIndex(index);
//                     lightBox(item.src);
//                   }}
//                 />
//               </Li>
//             );
//           })}
//           <FinalLI></FinalLI>
//         </Ul>
//       </>
//     )}
//   </>
// );
// };

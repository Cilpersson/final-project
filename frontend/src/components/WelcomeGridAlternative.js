import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { SectionWrapper } from "lib/stylesheet";
import img1 from "../images_animations/imagesPG/happy1.jpg";
import img4 from "../images_animations/imagesPG/happy4.jpg";
import img3 from "../images_animations/imagesPG/happy3.jpg";
import img7 from "../images_animations/imagesPG/happy7.jpg";
import img6 from "../images_animations/imagesPG/happy6.jpg";
import img9 from "../images_animations/imagesPG/happy9.jpg";
import img10 from "../images_animations/imagesPG/happy10.jpg";
import img8 from "../images_animations/imagesPG/happy8.jpg";
import img2 from "../images_animations/imagesPG/happy2.jpg";
import img11 from "../images_animations/imagesPG/happy11.jpg";
import img5 from "../images_animations/imagesPG/happy5.jpg";
// import img12 from "../images_animations/imagesPG/happy12.jpg";
// import img13 from "../images_animations/imagesPG/happy13.jpg";
// import img14 from "../images_animations/imagesPG/happy14.jpg";
// import img15 from "../images_animations/imagesPG/happy15.jpg";
// import img16 from "../images_animations/imagesPG/happy16.jpg";

const StyledGridWrapper = styled(SectionWrapper)``;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-aspect-ratio: 1/1) and (max-width: 668px) {
    flex-direction: row;
  }
`;

const Li = styled.li`
  height: 12vh;
  flex-grow: 1;
  margin: 0.5rem;
  display: flex;
  border-radius: 0.2rem;
`;

const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  align-items: center;
  justify-content: center;
`;

export const WelcomeGridAlternative = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const happyArr = [
    img1,
    img3,
    img7,
    img6,
    img9,
    img10,
    img8,
    img2,
    img11,
    img5,
    // img12,
    // img15,
    // img13,
    // img16,
    // img14,
  ];
  const happyArrSmall = [img1, img3, img4, img7, img6, img9];

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  if (width > 668) {
    return (
      <StyledGridWrapper>
        <Ul>
          {happyArr.map((item) => {
            return (
              <Li key={uuid()}>
                <Img src={item} />
              </Li>
            );
          })}
        </Ul>
      </StyledGridWrapper>
    );
  } else {
    return (
      <SectionWrapper>
        <Ul>
          {happyArrSmall.map((item) => {
            return (
              <Li key={uuid()}>
                <Img src={item} />
              </Li>
            );
          })}
        </Ul>
      </SectionWrapper>
    );
  }
};

import React from "react";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { WrapperGrid } from "lib/stylesheet";

import img1 from "../images_animations/imagesPG/happy1.jpg";
import img2 from "../images_animations/imagesPG/happy4.jpg";
import img3 from "../images_animations/imagesPG/happy3.jpg";
import img4 from "../images_animations/imagesPG/happy7.jpg";
import img5 from "../images_animations/imagesPG/happy6.jpg";
import img6 from "../images_animations/imagesPG/happy9.jpg";
import img7 from "../images_animations/imagesPG/happy10.jpg";
import img8 from "../images_animations/imagesPG/happy8.jpg";
import img9 from "../images_animations/imagesPG/happy2.jpg";
import img10 from "../images_animations/imagesPG/happy11.jpg";
import img11 from "../images_animations/imagesPG/happy5.jpg";
import img12 from "../images_animations/imagesPG/happy12.jpg";

const Img = styled.img`
  width: 100%;
  margin: auto;
`;

const Grid = styled(WrapperGrid)`
  margin: 0.8rem auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 0 1.5rem;
  @media (min-width: 668px) {
    grid-template-columns: repeat(4, 1fr);
    width: 70%;
    margin: auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    width: 50%;
    margin: 0 auto;
  }
`;

export const WelcomeGrid = () => {
  const happyArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <Grid>
      {happyArr.map((img) => {
        return <Img key={uuid()} src={img} alt="Happy earthling" />;
      })}
    </Grid>
  );
};

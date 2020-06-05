import React from "react";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { WrapperGrid } from "lib/stylesheet";

import img1 from "../imagesPG/happy1.jpg";
import img2 from "../imagesPG/happy4.jpg";
import img3 from "../imagesPG/happy3.jpg";
import img4 from "../imagesPG/happy7.jpg";
import img5 from "../imagesPG/happy9.jpg";
import img6 from "../imagesPG/happy6.jpg";
import img7 from "../imagesPG/happy10.jpg";
import img8 from "../imagesPG/happy8.jpg";
import img9 from "../imagesPG/happy2.jpg";
import img10 from "../imagesPG/happy11.jpg";
import img11 from "../imagesPG/happy5.jpg";
import img12 from "../imagesPG/happy12.jpg";

const Img = styled.img`
  width: 100%;
  margin: auto;

  @media (min-width: 668px) {
  }

  @media (min-width: 1024px) {
  }
`;

const Grid = styled(WrapperGrid)`
  margin: 0.8rem auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin: 0 1.5rem;
  @media (min-width: 668px) {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const WelcomeGrid = () => {
  const happyArr = [
    // img1,
    img2,
    img3,
    // img4,
    img5,
    img6,
    img7,
    // img8,
    img9,
    // img10,
    // img11,
    // img12,
  ];

  return (
    <Grid>
      {happyArr.map((img) => {
        return <Img key={uuid()} src={img} alt="Happy earthling" />;
      })}
    </Grid>
  );
};

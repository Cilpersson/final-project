import React from "react";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { CardTall, CardWide, PhotoGrid, SectionWrapper } from "lib/stylesheet";

import img1 from "../images_animations/imagesPG/happy1.jpg";
import img4 from "../images_animations/imagesPG/happy4.jpg";
import img3 from "../images_animations/imagesPG/happy3.jpg";
// import img7 from "../images_animations/imagesPG/happy7.jpg";
// import img6 from "../images_animations/imagesPG/happy6.jpg";
import img9 from "../images_animations/imagesPG/happy9.jpg";
// import img10 from "../images_animations/imagesPG/happy10.jpg";
// import img8 from "../images_animations/imagesPG/happy8.jpg";
import img2 from "../images_animations/imagesPG/happy2.jpg";
import img11 from "../images_animations/imagesPG/happy11.jpg";
import img5 from "../images_animations/imagesPG/happy5.jpg";
import img12 from "../images_animations/imagesPG/happy12.jpg";

const SectionForGrid = styled(SectionWrapper)``;

const Welcome = styled(PhotoGrid)`
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
  grid-auto-rows: 25px;
  margin: 0;
  padding: 0;

  @media (min-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
    grid-auto-rows: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
    grid-auto-rows: 25px;
  }
`;

export const WelcomeGrid = () => {
  return (
    <SectionForGrid>
      <Welcome>
        <CardTall img={img1} key={uuid()} />
        <CardWide img={img9} key={uuid()} />
        <CardTall img={img2} key={uuid()} />
        <CardWide img={img12} key={uuid()} />
        <CardTall img={img3} key={uuid()} />
        <CardTall img={img5} key={uuid()} />
        <CardWide img={img11} key={uuid()} />
        <CardWide img={img4} key={uuid()} />

        {/* 
         <CardTall img={img6} key={uuid()} /> 
        <CardWide img={img7} key={uuid()} />
        <CardWide img={img8} key={uuid()} />
        <CardWide img={img10} key={uuid()} /> */}
      </Welcome>
    </SectionForGrid>
  );
};

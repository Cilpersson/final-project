import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import styled from "styled-components/macro";
import { CardTinyTall, CardTinyWide } from "lib/stylesheet";

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
import img12 from "../images_animations/imagesPG/happy12.jpg";

const Welcome = styled.section`
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
  grid-auto-rows: 15px;
  margin: 0;
  padding: 0;

  display: grid;
  gap: 1rem;

  width: 90%;
  background: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  grid-auto-flow: dense;

  @media (min-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-auto-rows: 20px;
    width: 70%;
    margin: 1.5rem auto;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 1.5rem auto;
  }
`;

export const WelcomeGrid = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //Gets width of screen on rezise
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window]);

  return (
    <Welcome>
      <CardTinyWide img={img12} key={uuid()} />
      <CardTinyTall img={img3} key={uuid()} />
      <CardTinyTall img={img5} key={uuid()} />
      <CardTinyWide img={img11} key={uuid()} />
      {width > 668 && <CardTinyWide img={img4} key={uuid()} />}
      <CardTinyTall img={img6} key={uuid()} />
      <CardTinyWide img={img9} key={uuid()} />
      {width > 668 && <CardTinyTall img={img2} key={uuid()} />}
      {width > 668 && <CardTinyWide img={img10} key={uuid()} />}
      {width > 668 && (
        <>
          <CardTinyWide img={img7} key={uuid()} />
          <CardTinyTall img={img8} key={uuid()} />
          <CardTinyTall img={img1} key={uuid()} />
        </>
      )}
    </Welcome>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { StyledSlider } from "lib/stylesheet";

const SliderWrapper = styled.section`
  width: fit-content;
  margin: 0rem auto;
  background: white;

  @media (max-width: 668px) {
    display: none;
  }
`;

export const Slider = ({ sliderValue, setSliderValue }) => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  return (
    <>
      {currentGrid.imgList.length !== 0 && (
        <SliderWrapper>
          <StyledSlider
            type="range"
            min={15}
            max={45}
            value={sliderValue}
            className="slider"
            onChange={(event) => setSliderValue(event.target.value)}
          />
          <h4>Slide to adjust image size</h4>
        </SliderWrapper>
      )}
    </>
  );
};

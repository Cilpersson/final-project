import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { StyledSlider } from "lib/stylesheet";

const Opacity = styled.div`
  opacity: 0.5;
  transition: 0.3s;
`;

const SliderWrapper = styled.section`
  width: fit-content;
  margin: 0rem auto;
  background: white;

  &:hover ${Opacity} {
    opacity: 1;
  }

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
          {/* <Opacity> */}
          <StyledSlider
            type="range"
            min={15}
            max={45}
            value={sliderValue}
            className="slider"
            onChange={(event) => setSliderValue(event.target.value)}
          />
          {/* </Opacity> */}
          <h4>Slide to adjust image size</h4>
        </SliderWrapper>
      )}
    </>
  );
};

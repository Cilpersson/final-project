import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

const Opacity = styled.div`
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
  }
`;

const SliderWrapper = styled.section`
  width: fit-content;

  /* padding: 1rem; */
  margin: 0.5rem auto;
  background: white;

  &:hover ${Opacity} {
    opacity: 1;
  }

  @media (max-width: 668px) {
    display: none;
  }
`;

const StyledSlider = styled.input`
  appearance: none;
  width: 20%;
  height: 1rem;
  background: #d3d3d3;
  outline: none;

  background: #84eccf;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  margin: 0.2rem 0;
  cursor: pointer;

  width: 100%;
  max-width: 15rem;
  min-width: 10rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;

    border: 0.2rem solid #c3c3c3;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const Slider = ({ sliderValue, setSliderValue }) => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  return (
    <>
      {currentGrid.imgList.length !== 0 && (
        <SliderWrapper>
          <Opacity>
            <StyledSlider
              type="range"
              min={10}
              max={40}
              value={sliderValue}
              className="slider"
              onChange={(event) => setSliderValue(event.target.value)}
            />
          </Opacity>
          <h4>Slide to adjust image size</h4>
        </SliderWrapper>
      )}
    </>
  );
};

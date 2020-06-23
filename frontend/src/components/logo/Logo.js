import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Grid } from "./Grid";

const WrapperCol = styled.div``;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  letter-spacing: 0.5rem;

  @media (min-width: 668px) {
    font-size: 4rem;
    letter-spacing: 1.5rem;
  }
`;

const Slim = styled.span`
  display: inline-block;
  font-weight: 200;

  margin-left: 0.5rem;

  @media (min-width: 668px) {
    margin-left: 1.5rem;
  }
`;

const UnderTitle = styled.h3`
  width: 100%;
  letter-spacing: 0.8rem;
  font-weight: 400;
  font-size: 0.6rem;

  @media (min-width: 668px) {
    font-size: 1.4rem;
    letter-spacing: 1.2rem;
  }
`;

const innerWidth = (width) => {
  if (width < 668) {
    return "0.6rem";
  } else {
    return "0.90rem";
  }
};

// Functions are identical but not sure how to combine them
const marginLeft = (width) => {
  if (width < 668) {
  } else {
    return "1.3rem";
  }
};

export const Logo = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //Gets width of screen on rezise
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <WrapperCol>
      <WrapperRow>
        <Title>
          PHOTO{"   "}
          <WrapperRow>
            <Grid
              marginLeft={marginLeft(width)}
              width={innerWidth(width)}
              height={innerWidth(width)}
            />
            <Slim> RID </Slim>
          </WrapperRow>
        </Title>
      </WrapperRow>
      <WrapperCol>
        <UnderTitle>Remember together</UnderTitle>
      </WrapperCol>
    </WrapperCol>
  );
};

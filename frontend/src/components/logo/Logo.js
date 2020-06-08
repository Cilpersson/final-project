import React from "react";
import styled from "styled-components/macro";
import { Grid } from "./Grid";

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0 0.25rem 0;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  display: flex;
  align-items: center;

  @media (min-width: 668px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Slim = styled.span`
  display: inline-block;
  font-weight: 200;
`;

const UnderTitle = styled.h3`
  width: 100%;
  letter-spacing: 0.4rem;
  font-weight: 400;
  font-size: 1rem;

  @media (min-width: 668px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const innerWidth = () => {
  const width = window.innerWidth;
  if (width < 668) {
    return "0.6rem";
  } else if (width > 1024) {
    return "0.90rem";
  } else {
    return "0.7rem";
  }
};
// Functions are identical but not sure how to combine them
const marginLeft = () => {
  const width = window.innerWidth;
  if (width < 668) {
    return "0.5rem";
  } else if (width > 1024) {
    return "1.3rem";
  } else {
    return "1rem";
  }
};

export const Logo = () => {
  return (
    <WrapperCol>
      <WrapperRow>
        <Title>
          PHOTO{"   "}
          <Slim>
            <WrapperRow>
              <Grid
                marginLeft={marginLeft()}
                width={innerWidth()}
                height={innerWidth()}
              />
              RID
            </WrapperRow>
          </Slim>
        </Title>
      </WrapperRow>
      <WrapperCol>
        <UnderTitle>Remember together</UnderTitle>
      </WrapperCol>
    </WrapperCol>
  );
};

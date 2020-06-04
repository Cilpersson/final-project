import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const Slim = styled.span`
  display: inline-block;
  font-weight: 200;
`;

const UnderTitle = styled.h3`
  width: 100%;
  letter-spacing: 0.48rem;
  font-weight: 400;
`;

export const Logo = () => {
  return (
    <WrapperCol>
      <WrapperRow>
        <Grid />
        <Title>
          PHOTO <Slim>GRID</Slim>
        </Title>
      </WrapperRow>
      <WrapperCol>
        <UnderTitle>Remember together</UnderTitle>
      </WrapperCol>
    </WrapperCol>
  );
};

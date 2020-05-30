import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";

const Container = styled.div`
  display: flex;
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

export const Logo = () => {
  return (
    <Container>
      <Grid />
      <Title>
        PHOTO <Slim>GRID</Slim>
      </Title>
    </Container>
  );
};

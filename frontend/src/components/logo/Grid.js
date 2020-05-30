import React from "react";
import styled from "styled-components";

export const Grid = () => {
  return (
    <ContainerRow>
      <ContainerCol>
        <Squre />
        <Squre />
        <Squre />
      </ContainerCol>
      <ContainerCol>
        <Squre />
        <Squre />
        <Squre />
      </ContainerCol>
      <ContainerCol>
        <Squre />
        <Squre />
        <Squre />
      </ContainerCol>
    </ContainerRow>
  );
};

const ContainerRow = styled.div`
  display: flex;
  height: 2.28rem;
`;

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const Squre = styled.div`
  height: 0.6rem;
  width: 0.6rem;
  background: blue;
  margin: 0.09rem;
  border-radius: 0.1rem;
`;

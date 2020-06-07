import React from "react";
import styled from "styled-components";

const ContainerRow = styled.div`
  display: flex;
  justify-content: center;
  height: 2.28rem;
`;

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const Squre = styled.div`
  height: 0.6rem;
  width: 0.6rem;
  background: #84eccf;
  margin: 0.09rem;
  border-style: solid;
  border-color: #148867;
  border-radius: 0.05rem;
  border-width: ${(props) => props.borderWidth};
`;

export const Grid = () => {
  return (
    <ContainerRow>
      <ContainerCol>
        <Squre borderWidth="0.1rem 0 0 0.1rem" />
        <Squre borderWidth="0 0.1rem 0 0.1rem" />
        <Squre borderWidth="0 0 0.1rem 0.1rem" />
      </ContainerCol>
      <ContainerCol>
        <Squre borderWidth="0.1rem 0 0.1rem 0" />
        <Squre borderWidth="0.1rem 0 0.1rem 0.1rem" />
        <Squre borderWidth="0.1rem 0 0.1rem 0" />
      </ContainerCol>
      <ContainerCol>
        <Squre borderWidth="0.1rem 0.1rem 0.1rem 0" />
        <Squre borderWidth="0.1rem 0.1rem 0 0" />
        <Squre borderWidth="0 0.1rem 0.1rem 0" />
      </ContainerCol>
    </ContainerRow>
  );
};

import React from "react";
import styled from "styled-components";

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
  background: #1dd19e;
  margin: 0.09rem;
  border-style: solid;
  border-width: ${(props) => props.borderWidth};
`;

export const Grid = () => {
  return (
    <ContainerRow>
      <ContainerCol>
        <Squre borderWidth="1px 0px 0px 1px" />
        <Squre borderWidth="0px 1px 0px 1px" />
        <Squre borderWidth="0px 0px 1px 1px" />
      </ContainerCol>
      <ContainerCol>
        <Squre borderWidth="1px 0px 1px 0" />
        <Squre borderWidth="1px 0px 1px 1px" />
        <Squre borderWidth="1px 0px 1px 0px" />
      </ContainerCol>
      <ContainerCol>
        <Squre borderWidth="1px 1px 1px 0" />
        <Squre borderWidth="1px 1px 0px 0px" />
        <Squre borderWidth="0px 1px 1px 0px" />
      </ContainerCol>
    </ContainerRow>
  );
};

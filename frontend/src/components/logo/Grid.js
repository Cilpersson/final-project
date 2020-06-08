import React from "react";
import styled from "styled-components";

const ContainerRow = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
`;

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const Squre = styled.div`
  height: ${(props) => (props.height ? props.height : "0.6rem")};
  width: ${(props) => (props.width ? props.width : "0.6rem")};
  background: #84eccf;
  margin: 0.09rem;
  border-style: solid;
  border-color: #148867;
  border-radius: 0.05rem;
  border-width: ${(props) => props.borderWidth};
`;

export const Grid = ({ marginLeft, width, height }) => {
  return (
    <ContainerRow marginLeft={marginLeft}>
      <ContainerCol>
        <Squre height={height} width={width} borderWidth="0.1rem 0 0 0.1rem" />
        <Squre height={height} width={width} borderWidth="0 0.1rem 0 0.1rem" />
        <Squre height={height} width={width} borderWidth="0 0 0.1rem 0.1rem" />
      </ContainerCol>
      <ContainerCol>
        <Squre height={height} width={width} borderWidth="0.1rem 0 0.1rem 0" />
        <Squre
          height={height}
          width={width}
          borderWidth="0.1rem 0 0.1rem 0.1rem"
        />
        <Squre height={height} width={width} borderWidth="0.1rem 0 0.1rem 0" />
      </ContainerCol>
      <ContainerCol>
        <Squre
          height={height}
          width={width}
          borderWidth="0.1rem 0.1rem 0.1rem 0"
        />
        <Squre height={height} width={width} borderWidth="0.1rem 0.1rem 0 0" />
        <Squre height={height} width={width} borderWidth="0 0.1rem 0.1rem 0" />
      </ContainerCol>
    </ContainerRow>
  );
};

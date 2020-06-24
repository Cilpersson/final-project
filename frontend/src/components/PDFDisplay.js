import React from "react";
// import samplePDF from "./PHOTOGRID.pdf";
import styled from "styled-components/macro";

const Iframe = styled.iframe`
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 75vh;
  margin: 1rem 0.5rem 1.5rem;
  border-radius: 0.3rem;
  box-shadow: 0.2rem 0.3rem 0.7rem 0.1rem #2d2a2a95;
`;

export const PDFDisplay = () => {
  return (
    <Iframe
      title="Final project brief"
      src="https://www.docdroid.net/CBoalR8/photogrid-pdf#page=1&view=FitH"
    />
  );
};

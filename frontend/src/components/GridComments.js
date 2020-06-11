import React, { useState } from "react";
import styled from "styled-components/macro";
import { Paragraph } from "lib/stylesheet";

const Comments = styled.button`
  margin: auto;
  background-color: #84eccf;

  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const GridFormP = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem #074835;
  color: #ffffff;
  font-size: 1.1rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`;

export const GridComments = () => {
  const [showComments, setShowComments] = useState(false);
  return (
    <Comments onClick={() => setShowComments(!showComments)}>
      <GridFormP>{showComments ? "Grid" : "Comments"}</GridFormP>
    </Comments>
  );
};

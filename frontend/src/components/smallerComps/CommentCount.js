import React from "react";
import styled from "styled-components/macro";
import { PasswordInfo } from "lib/stylesheet";

const CharWrapper = styled.div`
  align-self: flex-end;
`;

const CountSpan = styled.span`
  margin-right: 0.2rem;
`;

export const CommentCount = ({ charCount }) => {
  return (
    <CharWrapper>
      <PasswordInfo>
        <span>{140 - charCount}</span> / 140
        <CountSpan />
      </PasswordInfo>
    </CharWrapper>
  );
};

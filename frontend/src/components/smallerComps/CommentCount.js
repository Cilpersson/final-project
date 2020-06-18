import React from "react";
import styled from "styled-components/macro";
import { PasswordInfo } from "lib/stylesheet";

const CharWrapper = styled.div`
  align-self: flex-end;
`;

export const CommentCount = ({ charCount }) => {
  return (
    <CharWrapper>
      <PasswordInfo>
        <span>{140 - charCount}</span> / 140
      </PasswordInfo>
    </CharWrapper>
  );
};

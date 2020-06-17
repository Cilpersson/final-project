import React from "react";
import styled from "styled-components/macro";
import { ButtonText, StyledButton } from "lib/stylesheet";

const StyledDeleteText = styled(ButtonText)`
  color: #400810;
`;

const StyledDeleteButton = styled(StyledButton)`
  background: #ec848e;
  border-color: #d11d39;

  width: 10.7rem;
  margin: 0.7rem auto 0;
  opacity: 0.3;

  &:hover {
    background: #ec848e;
  border-color: #d11d39;
    opacity: 1;
  }

  /* &:hover ${StyledDeleteText} {
    color: #ecbcc1;
  } */
`;

export const DeleteButton = ({
  disabled,
  text,
  onClick,
  type,
  placeholder,
}) => {
  return (
    <StyledDeleteButton
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled}
      onClick={onClick}
      type={type}>
      <StyledDeleteText>{text}</StyledDeleteText>
    </StyledDeleteButton>
  );
};

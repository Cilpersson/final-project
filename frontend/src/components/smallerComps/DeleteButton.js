import React from "react";
import styled from "styled-components/macro";
import { ButtonText, StyledButton } from "lib/stylesheet";

const StyledDeleteText = styled(ButtonText)`
  color: #400810;
`;

const StyledDeleteButton = styled(StyledButton)`
  background: #ec848e;
  border-color: #d11d39;
  width: fit-content;

  &:hover {
    background: #d11d39;
    border: 0.2rem solid #400810;
  }

  &:hover ${StyledDeleteText} {
    color: #ecbcc1;
  }
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

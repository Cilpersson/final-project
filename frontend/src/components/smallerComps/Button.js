import React from "react";
import { ButtonText, StyledButton } from "lib/stylesheet";

export const Button = ({ disabled, text, onClick, type, placeholder }) => {
  return (
    <StyledButton
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled}
      onClick={onClick}
      type={type}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

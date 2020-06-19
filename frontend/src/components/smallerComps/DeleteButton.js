import React from "react";
import { ButtonText, StyledDeleteButton } from "lib/stylesheet";

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
      <ButtonText>{text}</ButtonText>
    </StyledDeleteButton>
  );
};

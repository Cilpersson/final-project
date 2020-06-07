import React from "react";
import { Logo } from "components/logo/Logo";
import { StyledHeader } from "lib/stylesheet";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

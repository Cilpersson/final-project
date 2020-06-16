import React from "react";
import { Logo } from "components/logo/Logo";
import styled from "styled-components/macro";
import { StyledHeader, HeaderSectionWrapper, WrapperCol } from "lib/stylesheet";

const WrapperTitle = styled(WrapperCol)`
  max-width: 35rem;
  margin: auto;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderSectionWrapper>
        <WrapperTitle>
          <Logo />
        </WrapperTitle>
      </HeaderSectionWrapper>
    </StyledHeader>
  );
};

import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLightboxButton = styled.button`
  border: none;
  background: none;
  color: #fff;

  position: absolute;
  font-size: ${(props) => props.size};

  left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin: ${(props) => props.margin};
  cursor: pointer;
  opacity: 0.4;
  transition: all 0.2s;
  z-index: 1000;

  &:hover {
    color: #84eccf;
    opacity: 1;
  }

  @media (min-width: 668px) {
    margin: ${(props) => props.marginMedia};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
  }
  @media (max-width: 668px) {
    top: ${(props) => props.topMobile};
    bottom: ${(props) => props.bottomMobile};
  }
`;

export const LightboxButton = ({
  onClick,
  icon,
  margin,
  size,
  top,
  right,
  bottom,
  left,
  marginMedia,
  bottomMobile,
  topMobile,
}) => {
  return (
    <StyledLightboxButton
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      size={size}
      margin={margin}
      marginMedia={marginMedia}
      onClick={onClick}
      bottomMobile={bottomMobile}
      topMobile={topMobile}>
      <FontAwesomeIcon icon={icon} />
    </StyledLightboxButton>
  );
};

import React from "react";
import {
  Greeting,
  Paragraph,
  SectionWrapper,
  StyledLinks,
} from "lib/stylesheet";
import styled from "styled-components/macro";
import { Grid } from "../components/logo/Grid";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Span = styled.span`
  color: #000000;
`;

export const Support = () => {
  return (
    <SectionWrapper>
      <Grid />
      <Greeting>Support</Greeting>
      <Paragraph>
        PHOTO GRID is a side project and is at this point not meant for
        continuous use. If you still deside to use it and experience issues,
        feedback is always greatly appreciated. If you don't find any bugs you
        can always send a mail anayway. Just to say hi!
      </Paragraph>

      <StyledLinks href="mailto:hello@photogrid.community?subject=Hey I found a lady-🦗!">
        <Span>Click for </Span>
        <FontAwesomeIcon icon={faPaperPlane} />
      </StyledLinks>
    </SectionWrapper>
  );
};

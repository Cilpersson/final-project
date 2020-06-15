import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "components/logo/Grid";
import styled from "styled-components/macro";
import { ListFooter, ListItem, WrapperRow, WrapperCol } from "lib/stylesheet";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItemFooter = styled(ListItem)`
  margin: 0 0.2rem;
`;
const StyledFooter = styled.footer`
  background: #fff;
  width: 100%;
  padding: 1rem 0;
  border-top: 0.2rem solid #1dd19e;

  @media (min-width: 668px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

const WrapperIcons = styled(WrapperRow)`
  display: flex;
  justify-content: center;
`;
const StyledLinks = styled.a`
  font-size: 2rem;
  color: #1dd19e;

  font-size: 1rem;
  border-radius: 0.2rem;
  display: block;
  margin: 0 0.4rem;

  transition: 0.3s;

  &:hover {
    color: #148867;
    transform: scale(1.2);
  }
`;

const WrapperFooter = styled(WrapperCol)`
  max-width: 35rem;
  margin: auto;
`;

const WrapperMe = styled(WrapperRow)`
  width: 100%;
  justify-content: space-between;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <WrapperFooter>
        <ListFooter>
          <Grid />
          <WrapperCol>
            <WrapperRow>
              <Link to="/About">
                <ListItemFooter>About</ListItemFooter>
              </Link>
              -
              <Link to="/ProjectReflections">
                <ListItemFooter>Project Reflections</ListItemFooter>
              </Link>
              -
              <Link to="/Support">
                <ListItemFooter>Support</ListItemFooter>
              </Link>
            </WrapperRow>
            <WrapperMe>
              <ListItemFooter>$ whoami</ListItemFooter>
              <WrapperRow>
                <StyledLinks
                  href="https://www.linkedin.com/in/christina-persson-b3231ba2/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </StyledLinks>
                <StyledLinks
                  href="https://www.christinapersson.se/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faUserEdit} />
                </StyledLinks>
                <StyledLinks
                  href="https://github.com/Cilpersson/final-project"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithubAlt} />
                </StyledLinks>
              </WrapperRow>
            </WrapperMe>
          </WrapperCol>
        </ListFooter>
        <WrapperIcons></WrapperIcons>
      </WrapperFooter>
    </StyledFooter>
  );
};

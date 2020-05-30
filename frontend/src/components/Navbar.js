import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const ListItem = styled.li`
  display: inline;
  text-decoration: none;
`;

export const Navbar = () => {
  const isSignedIn = useSelector((store) => store.user.login.isSignedIn);

  if (isSignedIn) {
    return (
      <nav>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My grids</ListItem>
          <ListItem>Connected grids</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Sign out</ListItem>
        </List>
      </nav>
    );
  } else {
    return (
      <nav>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Log in</ListItem>
        </List>
      </nav>
    );
  }
};

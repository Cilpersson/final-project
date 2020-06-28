import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Nav } from "lib/stylesheet";

export const NavbarSignedOut = () => {
  return (
    <Nav>
      <List>
        <Link to="/">
          <ListItem>Home</ListItem>
        </Link>
        <Link to="/About">
          <ListItem>About</ListItem>
        </Link>
        <Link to="/SignUp" onClick={() => localStorage.clear()}>
          <ListItem>Log in</ListItem>
        </Link>
      </List>
    </Nav>
  );
};

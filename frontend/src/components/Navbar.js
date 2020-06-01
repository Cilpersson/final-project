import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { authorization } from "reducers/user";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const ListItem = styled.li`
  display: inline;
  text-decoration: none;
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const isSignedIn = useSelector((store) => store.user.login.isSignedIn);

  useEffect(() => {
    if (accessToken) {
      dispatch(authorization());
    }
  }, [accessToken, dispatch]);

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

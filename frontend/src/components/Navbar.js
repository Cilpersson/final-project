import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { authorization } from "reducers/user";
import { logout } from "reducers/user";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const ListItem = styled.li`
  display: inline;
  text-decoration: none;
`;

export const Navbar = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const isSignedIn = useSelector((store) => store.user.login.isSignedIn);

  useEffect(() => {
    if (accessToken) {
      dispatch(authorization());
    }
  }, [accessToken, dispatch]);

  const signOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  if (isSignedIn) {
    return (
      <nav>
        <List>
          <Link to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/MyGrids">
            <ListItem>My grids</ListItem>
          </Link>
          <Link to="/ConnectedGrids">
            <ListItem>Connected grids</ListItem>
          </Link>
          <Link to="/About">
            <ListItem>About</ListItem>
          </Link>
          <Link to="/" onClick={signOut}>
            <ListItem>Sign out</ListItem>
          </Link>
        </List>
      </nav>
    );
  } else {
    return (
      <nav>
        <List>
          <Link to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/About">
            <ListItem>About</ListItem>
          </Link>
          <Link to="/SignUp">
            <ListItem>Log in</ListItem>
          </Link>
        </List>
      </nav>
    );
  }
};

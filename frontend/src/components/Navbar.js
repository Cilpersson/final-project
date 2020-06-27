import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user } from "reducers/user";
import { authorization } from "reducers/user";
import { logout } from "reducers/user";
import { List, ListItem, Nav } from "lib/stylesheet";

export const Navbar = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

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

  const clearCurrentGrid = (path) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: "" }));
    dispatch(user.actions.setCurrentGrid({ currentGrid: null }));
    dispatch(user.actions.setCurrentGridPages({ currentGridPages: 0 }));
    dispatch(user.actions.setCurrentGridImages({ currentGridImages: [] }));
    dispatch(user.actions.setCurrentCommentPages({ currentCommentPages: 0 }));
    dispatch(user.actions.setCurrentGridComments({ currentGridComments: [] }));
    history.push(path);
  };

  if (accessToken) {
    return (
      <>
        <Nav>
          <List>
            <Link to="/" onClick={() => clearCurrentGrid("/")}>
              <ListItem>Home</ListItem>
            </Link>
            <Link to="/MyGrids" onClick={() => clearCurrentGrid("/MyGrids")}>
              <ListItem>My grids</ListItem>
            </Link>
            <Link
              to="/ConnectedGrids"
              onClick={() => clearCurrentGrid("/ConnectedGrids")}>
              <ListItem>Connected grids</ListItem>
            </Link>
            <Link to="/" onClick={signOut}>
              <ListItem>Sign out</ListItem>
            </Link>
          </List>
        </Nav>
      </>
    );
  } else {
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
  }
};

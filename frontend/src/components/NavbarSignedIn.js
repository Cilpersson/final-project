import React from "react";
import { Link, useHistory } from "react-router-dom";
import { List, ListItem, Nav } from "lib/stylesheet";
import { useDispatch } from "react-redux";
import { logout } from "reducers/user";
import { user } from "reducers/user";

export const NavbarSignedIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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
  return (
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
  );
};

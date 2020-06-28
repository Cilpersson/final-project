import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorization } from "reducers/user";
import { NavbarSignedIn } from "./NavbarSignedIn";
import { NavbarSignedOut } from "./NavbarSignedOut";

export const Navbar = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(authorization());
    }
  }, [accessToken, dispatch]);

  if (accessToken) {
    return <NavbarSignedIn />;
  } else {
    return <NavbarSignedOut />;
  }
};

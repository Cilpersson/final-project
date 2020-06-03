import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorization } from "reducers/user";

export const HomePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  // const accessToken = localStorage.getItem("accessToken");
  const isSignedIn = useSelector((store) => store.user.login.isSignedIn);
  const name = useSelector((store) => store.user.login.name);

  useEffect(() => {
    if (accessToken) {
      dispatch(authorization());
    }
  }, [accessToken, dispatch]);

  if (isSignedIn) {
    return <div>Hello {name}, welcome back!</div>;
  } else {
    return <div>You're not signed in</div>;
  }
};

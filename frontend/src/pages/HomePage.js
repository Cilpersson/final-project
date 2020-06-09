import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorization } from "reducers/user";
import { HomePageSignedIn } from "components/HomePageSignedIn";
import { HomePageSignedOut } from "components/HomePageSignedOut";

export const HomePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(authorization());
    }
  }, [accessToken, dispatch]);

  if (accessToken) {
    return (
      <>
        <HomePageSignedIn />
      </>
    );
  } else {
    return <HomePageSignedOut />;
  }
};

import React from "react";
import { PasswordInfo } from "lib/stylesheet";

export const PasswordMatch = ({ password, passwordCheck }) => {
  const passwordMatch = (pass, passCheck) => {
    if (pass.length === passCheck.length) {
      return pass === passCheck ? "" : "Your passwords don't match";
    }
  };
  return <PasswordInfo>{passwordMatch(password, passwordCheck)}</PasswordInfo>;
};

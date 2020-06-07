import React from "react";
import { PasswordInfo } from "lib/stylesheet";

export const PasswordMatch = ({ password, passwordCheck }) => {
  const passwordMatch = (pass, passCheck) => {
    if (passCheck.length > 5) {
      return pass === passCheck ? "" : "Your passwords don't match";
    }
  };
  return <PasswordInfo>{passwordMatch(password, passwordCheck)}</PasswordInfo>;
};

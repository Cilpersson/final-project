import React from "react";
import { PasswordInfo } from "lib/stylesheet";

export const PasswordStrength = ({ password }) => {
  const scorePassword = (pass) => {
    let counter = 0;
    const regexCap = /[A-Z]/g;
    const regexNum = /[0-9]/g;
    const regexChar = /[$&+,!:;=?@#_]/g;

    if (pass.length > 5) {
      counter++;
    }
    if (pass.search(regexCap) > -1) {
      counter++;
    }
    if (pass.search(regexNum) > -1) {
      counter++;
    }
    if (pass.search(regexChar) > -1) {
      counter++;
    }

    return counter;
  };

  const checkPassStrength = (pass) => {
    let score = scorePassword(pass);
    const scoreArr = [
      "Required length 6 chars",
      "Your password is: weak",
      "Your password is: Ok",
      "Your password is: Good",
      "Your password is: Great",
    ];

    return score > scoreArr.length
      ? scoreArr[scoreArr.length - 1]
      : scoreArr[score];
  };
  return <PasswordInfo>{checkPassStrength(password)}</PasswordInfo>;
};

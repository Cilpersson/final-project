import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { signup, login, user } from "reducers/user";
import { ui } from "../reducers/ui";
import { HomePage } from "pages/HomePage";
import { Button } from "components/smallerComps/Button";
import { Input, Legend, Fieldset, ErrorInfo } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import { PasswordStrength } from "./smallerComps/PasswordStrength";
import { PasswordMatch } from "./smallerComps/PasswordMatch";
import { Loader } from "./smallerComps/Loader";

const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;
const Label = styled.label`
  margin-bottom: 0.6rem;
  max-width: 15rem;
  width: 100%;
`;

export const Form = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const error = useSelector((store) => store.user.login.errorMessage);
  const isLoading = useSelector((store) => store.ui.isLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [signUp, setSignUp] = useState(true);

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(name, email.toLowerCase(), password));
    dispatch(user.actions.setFirstSignUp({ firstSignUp: true }));
    setName("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email.toLowerCase(), password));
    dispatch(user.actions.setFirstSignUp({ firstSignUp: false }));
    setEmail("");
    setPassword("");
  };

  if (accessToken) {
    return <HomePage />;
  } else {
    return (
      <>
        <Fieldset>
          <Legend>{signUp ? "Sign up!" : "Log in!"}</Legend>
          <Grid />
          <br />
          <Signup>
            {signUp && (
              <Label>
                Name
                <Input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Label>
            )}
            <Label>
              E-mail
              <Input
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Label>
            <Label>
              Password
              <Input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {signUp && <PasswordStrength password={password} />}
            </Label>
            {signUp && (
              <Label>
                Confirm password
                <Input
                  required
                  type="password"
                  value={passwordCheck}
                  onChange={(event) => setPasswordCheck(event.target.value)}
                />
                {signUp && (
                  <PasswordMatch
                    password={password}
                    passwordCheck={passwordCheck}
                  />
                )}
              </Label>
            )}
            {<ErrorInfo> {error && error.message}</ErrorInfo>}
            {signUp && (
              <Button
                type="submit"
                disabled={
                  password.length > 0 && password === passwordCheck
                    ? false
                    : true
                }
                text="Sign up"
                onClick={handleSignup}
              />
            )}
            {!signUp && (
              <Button
                type="submit"
                disabled={false}
                text="Log in"
                onClick={handleLogin}
              />
            )}
          </Signup>
          <Button
            onClick={() => {
              dispatch(user.actions.setErrorMessage(""));
              setSignUp(!signUp);
            }}
            type="button"
            disabled={false}
            text={signUp ? "Already have an account" : "Click to sign up!"}
          />
        </Fieldset>
      </>
    );
  }
};

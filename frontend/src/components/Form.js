import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login, user } from "reducers/user";
import { HomePage } from "pages/HomePage";
import { Button } from "components/smallerComps/Button";
import {
  Input,
  Legend,
  Fieldset,
  ErrorInfo,
  Signup,
  Label,
} from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import { PasswordStrength } from "./smallerComps/PasswordStrength";
import { PasswordMatch } from "./smallerComps/PasswordMatch";

export const Form = () => {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.user.login.errorMessage);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signUp, setSignUp] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSingupLogin = (event) => {
    event.preventDefault();
    dispatch(user.actions.setErrorMessage({ errorMessage: "" }));
    if (signUp) {
      dispatch(signup(name, email.toLowerCase(), password));
      dispatch(user.actions.setFirstSignUp({ firstSignUp: true }));
    } else {
      dispatch(login(email.toLowerCase(), password));
      dispatch(user.actions.setFirstSignUp({ firstSignUp: false }));
    }

    if (accessToken) {
      setName("");
      setEmail("");
      setPassword("");
      setPasswordCheck("");
    }
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
          <Signup onSubmit={(event) => handleSingupLogin(event)}>
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
            {signUp && <Button type="submit" disabled={false} text="Sign up" />}
            {!signUp && <Button type="submit" disabled={false} text="Log in" />}
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

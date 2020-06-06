import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { signup, login } from "reducers/user";
import { HomePage } from "pages/HomePage";
import { Button } from "components/smallerComps/Button";
import { Input, Legend, Fieldset } from "lib/stylesheet";

const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Label = styled.label``;

export const Form = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [signUp, setSignUp] = useState(true);

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(name, email, password));
    setName("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
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
              </Label>
            )}
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
            onClick={() => setSignUp(!signUp)}
            type="button"
            disabled={false}
            text={signUp ? "Already have an account" : "Click to sign up!"}
          />
        </Fieldset>
      </>
    );
  }
};

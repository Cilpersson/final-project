import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signup, login } from "reducers/user";
import { HomePage } from "components/pages/HomePage";
import { Button } from "components/smallerComps/Button";
import { Input, Paragraph, WrapperRow } from "lib/stylesheet";

const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Label = styled.label``;

const Fieldset = styled.fieldset`
  padding: 0.8rem 1.6rem;
  margin: 0.4rem auto;
  border-radius: 0.2rem;
  border-color: #1dd19e;
  width: 65%;
`;

const Legend = styled.legend`
  font-size: 1.2rem;
  padding: 0 0.8rem;
  color: black;
`;

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
      <section>
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
          <WrapperRow>
            <Paragraph>Already have an account?</Paragraph>
            <Button
              onClick={() => setSignUp(!signUp)}
              type="button"
              disabled={false}
              text={signUp ? "Log in" : "Sign up!"}
            />
          </WrapperRow>
        </Fieldset>
      </section>
    );
  }
};

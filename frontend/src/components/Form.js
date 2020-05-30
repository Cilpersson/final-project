import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signup } from "reducers/user";

const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
`;

export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(name, email, password));
    setName("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  return (
    <Signup>
      <Label>
        Name
        <Input value={name} onChange={(event) => setName(event.target.value)} />
      </Label>
      <Label>
        E-mail
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Label>
      <Label>
        Confirm password
        <Input
          type="password"
          value={passwordCheck}
          onChange={(event) => setPasswordCheck(event.target.value)}
        />
      </Label>

      <button
        disabled={
          password.length > 0 && password === passwordCheck ? false : true
        }
        type="submit"
        onClick={handleSignup}>
        Sign up
      </button>
    </Signup>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGrid, connectToGrid } from "reducers/user";
import { Button } from "components/smallerComps/Button";
import {
  SmallFieldset,
  Legend,
  Input,
  PasswordInfo,
  ErrorInfo,
} from "lib/stylesheet";

export const CreateConnectGrid = ({
  createG,
  buttonText,
  labelText,
  legend,
}) => {
  const [textField, setTextField] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((store) => store.user.login.errorMessage);

  const handleSubmit = () => {
    if (createG) {
      dispatch(createGrid(textField));
      setTextField("");
    } else {
      dispatch(connectToGrid(textField));
      setTextField("");
    }
  };

  return (
    <SmallFieldset>
      <Legend>{legend}</Legend>
      <label>
        <Input
          minLength="5"
          placeholder={labelText}
          required
          value={textField}
          onChange={(event) => setTextField(event.target.value)}
        />
        <PasswordInfo>Required length is at least 5 characters</PasswordInfo>
        {<ErrorInfo> {error && error.message}</ErrorInfo>}
      </label>
      <Button
        type="submit"
        disabled={false}
        text={buttonText}
        onClick={() => handleSubmit()}
      />
    </SmallFieldset>
  );
};

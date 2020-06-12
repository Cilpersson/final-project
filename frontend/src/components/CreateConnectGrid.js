import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGrid, connectToGrid } from "reducers/user";
import { Button } from "components/smallerComps/Button";
import styled from "styled-components/macro";
import { Fieldset, Legend, Input } from "lib/stylesheet";

const SmallFieldset = styled(Fieldset)`
  margin: 0 auto;
  width: 100%;
  margin-top: 1.5rem;
  max-width: 15rem;
`;

export const CreateConnectGrid = ({
  createG,
  buttonText,
  labelText,
  legend,
}) => {
  const [textField, setTextField] = useState("");
  const dispatch = useDispatch();

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
          placeholder={labelText}
          required
          value={textField}
          onChange={(event) => setTextField(event.target.value)}
        />
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

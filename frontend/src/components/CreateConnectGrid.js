import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGrid, connectToGrid } from "reducers/user";
import { Button } from "components/smallerComps/Button";

export const CreateConnectGrid = ({ createG, buttonText, labelText }) => {
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
    <>
      <form>
        <label>
          {labelText}
          <input
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
      </form>
    </>
  );
};

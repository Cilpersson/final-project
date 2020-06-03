import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGrid } from "reducers/user";
import { Button } from "components/smallerComps/Button";

export const CreateConnectGrid = ({ createG, buttonText, labelText }) => {
  const [textField, setTextField] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (createG) {
      console.log("This is the console log of the textfield: ", textField);
      dispatch(createGrid(textField));
      setTextField("");
      //Skapa ett grid
      //createGrid thunk
    } else {
      //Connecta ett grid
      //connectGrid thunk
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

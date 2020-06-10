import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { Grid } from "../components/logo/Grid";
import { DisplayGrid } from "components/DisplayGrid";
import { DisplayGridAlternative } from "components/DisplayGridAlternative";
import { ShareGrid } from "components/ShareGrid";
import { postToGrid, accessGrid } from "reducers/user";
import {
  GridPageTitle,
  SectionWrapper,
  Fieldset,
  Legend,
  GridForm,
  Submit,
  ButtonText,
} from "lib/stylesheet";

const LabelActingInput = styled.label``;

const HideInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + ${LabelActingInput} {
    background: #1dd19e50;
    border: 0.2rem solid #1dd19e;
    border-radius: 0.2rem;
    padding: 0.4rem;
    margin: 0.2rem;
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
  }
  &:focus + ${LabelActingInput} {
  }
  + ${LabelActingInput}:hover {
  }

  + ${LabelActingInput} {
    cursor: pointer;
  }

  + ${LabelActingInput} * {
    pointer-events: none;
  }
`;

export const GridPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);
  const usersGrids = useSelector((store) => store.user.grid.createdGrids);

  const fileInput = useRef();
  const formData = new FormData();

  useEffect(() => {
    if (accessToken) {
      dispatch(accessGrid(currentGrid.accessToken));
    }
    //isLoading makes the images loaded to grid instantly
  }, [isLoading, accessToken, currentGrid.accessToken, dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("images", fileInput.current.files[i]);
    }

    // fileInput.current.files.map((file) => formData.append("images", file));

    dispatch(postToGrid(formData));
  };

  const checkUser = () => {
    const gridCheck = usersGrids.filter(
      (grid) => grid.accessToken === currentGrid.accessToken
    );

    if (gridCheck.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <SectionWrapper>
        <Grid />
        <GridPageTitle>{currentGrid.name}</GridPageTitle>
        <Fieldset>
          <Legend>Upload images here!</Legend>
          <GridForm onSubmit={handleFormSubmit}>
            {!isLoading && (
              <>
                <HideInput
                  type="file"
                  name="files"
                  id="files"
                  multiple
                  ref={fileInput}
                />
                <LabelActingInput htmlFor="files">
                  Select image
                </LabelActingInput>
                <Submit type="submit">
                  <ButtonText>Submit</ButtonText>
                </Submit>
                {errorMessage}
              </>
            )}
            {isLoading && <p>Uploading your image</p>}
          </GridForm>
        </Fieldset>
        {checkUser() && <ShareGrid />}
      </SectionWrapper>
      <DisplayGridAlternative />
      {/* <DisplayGrid /> */}
    </>
  );
};

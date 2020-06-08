import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";
import { Grid } from "../components/logo/Grid";
import { postToGrid, accessGrid } from "reducers/user";
import {
  GridPageTitle,
  SectionWrapper,
  Fieldset,
  Legend,
  LargerGrid,
  Img,
  GridForm,
  Submit,
  ButtonText,
  Ul,
  Greeting,
} from "lib/stylesheet";
import { Button } from "components/smallerComps/Button";

const StyledATag = styled.a`
  background: #84eccf;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem 0.1rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionWrapperRow = styled(SectionWrapper)`
  display: flex;
  flex-direction: row;
  margin: 1.5rem;
  padding: 1.5rem;
`;

const LabelActingInput = styled.label``;

const HideInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
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
    font-size: 1.7rem;
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
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (accessToken) {
      dispatch(accessGrid(currentGrid.accessToken));
    }
    //isLoading makes the images loaded to grid instantly
  }, [isLoading, accessToken, currentGrid.accessToken, dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formData.append("image", fileInput.current.files[0]);
    dispatch(postToGrid(formData));
  };

  const copyOnClick = (event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    event.target.focus();
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
                <HideInput type="file" name="file" id="file" ref={fileInput} />
                <LabelActingInput htmlFor="file">Select image</LabelActingInput>
                <Submit type="submit">
                  <ButtonText>Submit</ButtonText>
                </Submit>
                {errorMessage}
              </>
            )}
            {isLoading && <p>Uploading your image</p>}
          </GridForm>
        </Fieldset>
        {checkUser() && (
          <Ul>
            <Greeting>Share grid with your friends!</Greeting>
            <Button
              disabled={false}
              text="Copy accesstoken for grid"
              type="button"
              onClick={copyOnClick}
            />
            <StyledATag
              href={`mailto:?subject=I have a link I want to share with you!&body=Head over to https://www.photogrid.community and sign up to access my grid!%0D%0A%0D%0APaste in this code: ${currentGrid.accessToken}%0D%0A%0D%0AAnd make sure to upload some pictures to it!`}>
              <ButtonText>Share with a friend!</ButtonText>
            </StyledATag>
            <textarea
              // Style properties hides textarea from screen, pretty hacky but it works
              style={{ position: "fixed", top: "-1000px" }}
              ref={textAreaRef}
              value={currentGrid.accessToken}
            />
          </Ul>
        )}
      </SectionWrapper>

      <LargerGrid>
        {currentGrid.imgList.map((img) => {
          return (
            <Img
              key={uuid()}
              src={img.imageUrl}
              alt={`Uploaded image from ${currentGrid.name}`}
            />
          );
        })}
      </LargerGrid>
    </>
  );
};

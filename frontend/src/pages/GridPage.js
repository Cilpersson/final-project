import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { uuid } from "uuidv4";
import { postToGrid, accessGrid } from "reducers/user";
import { GridPageTitle, Form, StyledButton, Ul } from "lib/stylesheet";

const Img = styled.img`
  width: 100%;
  margin: auto;
  border: 0.1rem solid #1dd19e;
  border-radius: 0.1rem;

  @media (min-width: 1024px) {
    transition: 0.3s ease-in;
    &:hover {
      transform: scale(1.5);
      margin: auto;
      border-radius: 0.2rem;
      border: 0.1rem solid #1dd19e;
    }
  }
`;

const LargerGrid = styled(Ul)`
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;

  @media (min-width: 668px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 0.5rem;
    grid-template-columns: repeat(5, 1fr);
    padding: 6rem;
  }
`;

const GridForm = styled(Form)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 20rem;
  margin: auto;
`;

const Submit = styled(StyledButton)`
  width: 100%;
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

  const fileInput = useRef();
  const formData = new FormData();

  useEffect(() => {
    if (accessToken) {
      dispatch(accessGrid(currentGrid.accessToken));
    }

    //isLoading makes the images loaded instantly
  }, [isLoading, accessToken, currentGrid.accessToken, dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    formData.append("image", fileInput.current.files[0]);
    dispatch(postToGrid(formData));
  };

  return (
    <>
      <GridPageTitle>{currentGrid.name}</GridPageTitle>
      <GridForm onSubmit={handleFormSubmit}>
        {!isLoading && (
          <>
            <HideInput type="file" name="file" id="file" ref={fileInput} />
            <LabelActingInput htmlFor="file">Select image</LabelActingInput>

            <Submit type="submit">Submit</Submit>
            {errorMessage}
          </>
        )}
        {isLoading && <p>Uploading your image</p>}
      </GridForm>

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

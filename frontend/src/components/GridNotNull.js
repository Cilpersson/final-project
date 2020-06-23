import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import Dropzone from "react-dropzone";
import moment from "moment";
import { user } from "../reducers/user";
import { postToGrid, accessGrid } from "reducers/user";
import { Grid } from "components/logo/Grid";
import { DisplayGridAlternative } from "components/DisplayGridAlternative";
import { GridComments } from "components/GridComments";
import { Slider } from "components/Slider";
import { Button } from "components/smallerComps/Button";
import { Loader } from "components/smallerComps/Loader";

import {
  Paragraph,
  GridPageTitle,
  SectionWrapper,
  Fieldset,
  Legend,
  PasswordInfo,
  WrapperRow,
  ErrorInfo,
  Greeting,
  StyledSubmit,
} from "lib/stylesheet";
import { CheckUsers } from "./CheckUsers";
const GridPageWrapper = styled.section``;

const GridFormP = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem #3f7163;
  color: #ffffff;
  font-size: 1.1rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`;

const Span = styled.span`
  font-weight: 400;
`;

const DropzoneWrapper = styled.div`
  border-radius: 0.2rem;
  padding: 2rem;
  margin-bottom: 0.6rem;
  cursor: pointer;

  background-color: #84eccf;
  background-image: linear-gradient(
    315deg,
    #ffffff 0%,
    #e5e5e5 31%,
    #84eccf 100%
  );
  border: 0.1rem solid #84eccf;
`;

export const GridNotNull = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const error = useSelector((store) => store.user.login.errorMessage);
  const usersGrids = useSelector((store) => store.user.grid.createdGrids);
  const userId = useSelector((store) => store.user.login.userId);

  const [files, setFiles] = useState(null);

  const [comments, setComments] = useState(false);
  const formData = new FormData();

  const [width, setWidth] = useState(window.innerWidth);
  const [didMount, setDidMount] = useState(false);
  const [sliderValue, setSliderValue] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  //Gets width of screen on rezise
  useEffect(() => {
    setDidMount(true);
    if (didMount) {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }
    return () => setDidMount(false);
  }, []);

  useEffect(() => {
    dispatch(accessGrid(currentGrid.accessToken));
  }, [isLoading, accessToken, currentGrid.accessToken, dispatch]);

  const handleFormSubmit = (files) => {
    for (let i = 0; i < files.length; i++) {
      //Will solve this in another way when I have more time.
      if (files[i].type.includes("image")) {
        formData.append("images", files[i]);
      }
    }
    dispatch(postToGrid(formData));
    setFiles(null);
    setCurrentPage(1);
  };

  const fileCount = (data) => {
    if (data.length === 1) {
      return data[0].name;
    } else {
      return `You have selected ${data.length} files`;
    }
  };

  const gridCheck = () => {
    if (currentGrid.createdBy === userId) {
      return `You created this grid ${moment(currentGrid.createdAt).fromNow()}`;
    } else {
      return `Grid created by ${currentGrid.gridOwner} ${moment(
        currentGrid.createdAt
      ).fromNow()}`;
    }
  };

  return (
    <GridPageWrapper>
      <SectionWrapper>
        <Grid />
        <GridPageTitle>{currentGrid.name}</GridPageTitle>
        <Greeting>{gridCheck()} </Greeting>
        <Fieldset>
          <Legend>Upload images here!</Legend>
          {!isLoading && (
            <>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setFiles(acceptedFiles);
                  dispatch(user.actions.setErrorMessage({ errorMessage: "" }));
                }}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <DropzoneWrapper {...getRootProps()}>
                      <input {...getInputProps()} />
                      <GridFormP>
                        DROP <Span>||</Span> CLICK
                      </GridFormP>
                    </DropzoneWrapper>
                  </section>
                )}
              </Dropzone>
              {files !== null && (
                <>
                  <PasswordInfo>{fileCount(files)}</PasswordInfo>
                  <StyledSubmit
                    type="button"
                    onClick={() => handleFormSubmit(files)}>
                    {files.length > 1
                      ? "Post images to grid"
                      : "Post image to grid"}
                  </StyledSubmit>
                </>
              )}
            </>
          )}
          {!isLoading && <ErrorInfo> {error && error.message}</ErrorInfo>}
          <Loader text="UPLOADING" />
        </Fieldset>
        <CheckUsers />
      </SectionWrapper>
      <SectionWrapper>
        {!comments && (
          <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        )}
        <Button
          onClick={() => setComments(!comments)}
          text={comments ? "Show grid" : "Show comments"}
          disabled={false}
          type="button"
        />
      </SectionWrapper>
      <WrapperRow>
        {!comments && (
          <DisplayGridAlternative
            sliderValue={sliderValue}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {comments && <GridComments />}
      </WrapperRow>
    </GridPageWrapper>
  );
};

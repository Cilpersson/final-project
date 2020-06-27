import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accessGrid } from "reducers/user";
import { Slider } from "components/Slider";
import { Grid } from "components/logo/Grid";
import { DisplayGridAlternative } from "components/DisplayGridAlternative";
import { GridComments } from "components/GridComments";
import { GridGreeting } from "components/smallerComps/GridGreeting";
import { Button } from "components/smallerComps/Button";
import { Loader } from "components/smallerComps/Loader";
import { PostImages } from "./PostImages";
import { CheckUsers } from "./CheckUsers";
import { StyledDropzone } from "./StyledDropzone";
import {
  GridPageTitle,
  SectionWrapper,
  Fieldset,
  Legend,
  WrapperRow,
  ErrorInfo,
} from "lib/stylesheet";

export const GridNotNull = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const error = useSelector((store) => store.user.login.errorMessage);

  const [files, setFiles] = useState(null);
  const [comments, setComments] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(accessGrid(currentGrid.accessToken));
  }, [isLoading, accessToken, currentGrid.accessToken, dispatch]);

  return (
    <>
      <SectionWrapper>
        <Grid />
        <GridPageTitle>{currentGrid.name}</GridPageTitle>
        <GridGreeting />
        <Fieldset>
          <Legend>Upload images here!</Legend>
          {!isLoading && (
            <>
              <StyledDropzone setFiles={setFiles} />
              <PostImages
                files={files}
                setFiles={setFiles}
                setCurrentPage={setCurrentPage}
              />
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
    </>
  );
};

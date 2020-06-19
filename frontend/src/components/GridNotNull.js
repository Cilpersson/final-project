import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { user } from "../reducers/user";
import Dropzone from "react-dropzone";
import { Grid } from "../components/logo/Grid";
import { DisplayGridAlternative } from "components/DisplayGridAlternative";
import { ShareGrid } from "components/ShareGrid";
import { postToGrid, accessGrid, deleteGrid, leaveGrid } from "reducers/user";
import { GridComments } from "components/GridComments";
import { Button } from "components/smallerComps/Button";
import { Slider } from "components/Slider";
import { DeleteButton } from "./smallerComps/DeleteButton";
import { Loader } from "./smallerComps/Loader";

import swal from "sweetalert";
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
} from "lib/stylesheet";
const GridPageWrapper = styled.section``;

const GridFormP = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem #074835;
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
    #84eccf 50%,
    #1dd19e 100%
  );
  border: 0.1rem solid #1dd19e;
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
  };

  const fileCount = (data) => {
    if (data.length === 1) {
      console.log("en fil");
      console.log(data[0].name);
      return data[0].name;
    } else {
      console.log("flera filer");
      return `You have selected ${data.length} files`;
    }
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

  const deleteGridOnClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this grid!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteGrid(currentGrid.accessToken));
        swal("Poof! Your grid has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Phew!", "Your grid is safe", "info");
      }
    });
  };

  const leaveGridOnClick = () => {
    swal({
      title: "Are you sure?",
      text:
        "Once you leave you will need the grid link to access this grid again.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(leaveGrid(currentGrid.accessToken));
        swal("Poof! You have left the grid.", {
          icon: "success",
        });
      } else {
        swal("Phew!", "Your still connected to this grid.", "info");
      }
    });
  };

  const gridCheck = () => {
    if (currentGrid.createdBy === userId) {
      return "You created this grid";
    } else {
      return `Grid created by ${currentGrid.gridOwner}`;
    }
  };

  return (
    <GridPageWrapper>
      <SectionWrapper>
        <Grid />
        <GridPageTitle>{currentGrid.name}</GridPageTitle>
        <Greeting>{gridCheck()}</Greeting>
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
                  <button type="button" onClick={() => handleFormSubmit(files)}>
                    submit
                  </button>
                </>
              )}
            </>
          )}
          {!isLoading && <ErrorInfo> {error && error.message}</ErrorInfo>}
          <Loader text="UPLOADING" />
        </Fieldset>
        {checkUser() && <ShareGrid />}
        {checkUser() && (
          <DeleteButton
            onClick={() => deleteGridOnClick()}
            text="Delete grid"
            disabled={false}
            type="button"
          />
        )}
        {!checkUser() && (
          <DeleteButton
            onClick={() => leaveGridOnClick()}
            text="Leave grid"
            disabled={false}
            type="button"
          />
        )}
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
        {!comments && <DisplayGridAlternative sliderValue={sliderValue} />}
        {comments && <GridComments />}
      </WrapperRow>
    </GridPageWrapper>
  );
};

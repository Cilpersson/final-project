import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import Dropzone from "react-dropzone";
import { Grid } from "../components/logo/Grid";
import { DisplayGridAlternative } from "components/DisplayGridAlternative";
import { ShareGrid } from "components/ShareGrid";
import { postToGrid, accessGrid, deleteGrid } from "reducers/user";
import { LottiePlayer } from "components/LottiePlayer";
import animationLoader from "../images_animations/animations/loader.json";
import animationCamera from "../images_animations/animations/camera.json";
import { GridComments } from "components/GridComments";
import { Button } from "components/smallerComps/Button";
import { Slider } from "components/Slider";
import { DeleteButton } from "./smallerComps/DeleteButton";
import swal from "sweetalert";
import {
  Paragraph,
  GridPageTitle,
  SectionWrapper,
  Fieldset,
  Legend,
  PasswordInfo,
  WrapperRow,
  WrapperCol,
} from "lib/stylesheet";
const GridPageWrapper = styled.section`
  /* margin-right: 5rem; */
`;

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
  cursor: pointer;

  background-color: #84eccf;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%2384eccf' stroke-width='0.19' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cuse fill='%2381e7cb' href='%23s' y='2'/%3E%3Cuse fill='%2381e7cb' href='%23s' x='1' y='2'/%3E%3Cuse fill='%237fe3c7' href='%23s' x='2' y='2'/%3E%3Cuse fill='%237fe3c7' href='%23s'/%3E%3Cuse fill='%237cdec3' href='%23s' x='2'/%3E%3Cuse fill='%237cdec3' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%2379d9be'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%2379d9be'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%2377d4ba'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%2384eccf'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%2374d0b6'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(10) translate(-900 -675)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const WhiteWrapper = styled(WrapperCol)`
  background: #fff;
  width: fit-content;
  margin: auto;
  padding: 1rem;
`;

export const GridNotNull = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);
  const usersGrids = useSelector((store) => store.user.grid.createdGrids);

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
      formData.append("images", files[i]);
    }
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
        swal("Your grid is safe!");
      }
    });
  };

  return (
    <GridPageWrapper>
      <SectionWrapper>
        <Grid />
        <GridPageTitle>{currentGrid.name}</GridPageTitle>
        <Fieldset>
          <Legend>Upload images here!</Legend>
          {!isLoading && (
            <>
              <Dropzone
                onDrop={(acceptedFiles) => handleFormSubmit(acceptedFiles)}>
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
              {errorMessage}
            </>
          )}
          {isLoading && (
            <>
              <LottiePlayer
                animation={animationLoader}
                height="25%"
                width="25%"
              />
              <PasswordInfo>UPLOADING</PasswordInfo>
            </>
          )}
        </Fieldset>

        {checkUser() && <ShareGrid />}
        {currentGrid.imgList.length === 0 && !isLoading && (
          <LottiePlayer
            animation={animationCamera}
            height={width > 668 ? "30%" : "50%"}
            width={width > 668 ? "30%" : "50%"}
          />
        )}
        {checkUser() && (
          <DeleteButton
            onClick={() => deleteGridOnClick()}
            text="Delete grid"
            disabled={false}
            type="button"
          />
        )}
      </SectionWrapper>
      <WhiteWrapper>
        {!comments && (
          <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        )}
        <Button
          onClick={() => setComments(!comments)}
          text={comments ? "Show grid" : "Show comments"}
          disabled={false}
          type="button"
        />
      </WhiteWrapper>
      <WrapperRow>
        {!comments && <DisplayGridAlternative sliderValue={sliderValue} />}
        {comments && <GridComments />}
      </WrapperRow>
    </GridPageWrapper>
  );
};

import React from "react";
import styled from "styled-components/macro";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { user } from "../reducers/user";
import { Paragraph } from "lib/stylesheet";

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

export const StyledDropzone = ({ setFiles }) => {
  const dispatch = useDispatch();

  return (
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
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { postToGrid } from "reducers/user";
import { PasswordInfo, StyledSubmit } from "lib/stylesheet";

export const PostImages = ({ files, setFiles, setCurrentPage }) => {
  const formData = new FormData();
  const dispatch = useDispatch();

  const fileCount = (data) => {
    if (data.length === 1) {
      return data[0].name;
    } else {
      return `You have selected ${data.length} files`;
    }
  };

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
  return (
    <>
      <PasswordInfo>{fileCount(files)}</PasswordInfo>
      <StyledSubmit type="button" onClick={() => handleFormSubmit(files)}>
        {files.length > 1 ? "Post images to grid" : "Post image to grid"}
      </StyledSubmit>
    </>
  );
};

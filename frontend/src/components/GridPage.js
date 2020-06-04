import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { usersGrids, postToGrid } from "reducers/user";

export const GridPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const fileInput = useRef();
  const formData = new FormData();

  useEffect(() => {
    if (accessToken) {
      dispatch(usersGrids());
    }
  }, [currentGrid]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    formData.append("image", fileInput.current.files[0]);
    dispatch(postToGrid(formData));
  };

  return (
    <>
      {!isLoading && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Add image
            <input type="file" ref={fileInput} />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
      {isLoading && <p>Uploading your image</p>}
      <h2>{currentGrid.name}</h2>
      <ul>
        {currentGrid.imgList.map((img) => {
          return (
            <img
              key={uuid()}
              src={img.imageUrl}
              alt={`Uploaded image from ${currentGrid.name}`}
            />
          );
        })}
      </ul>
    </>
  );
};

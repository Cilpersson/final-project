import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accessGridImages } from "reducers/user";
import { PasswordInfo, WrapperRow } from "lib/stylesheet";

import styled from "styled-components";

export const PaginationImages = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const totalPages = useSelector((store) => store.user.grid.currentGridPages);
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const handleOnClick = (direction) => {
    if (direction === "back") {
      dispatch(accessGridImages(currentGrid.accessToken, currentPage - 1));
      setCurrentPage(currentPage - 1);
    } else {
      dispatch(accessGridImages(currentGrid.accessToken, currentPage + 1));
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <WrapperRow>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => handleOnClick("back")}>
        {"<"}
      </PaginationButton>
      <PaginationText>
        {currentPage} / {totalPages}{" "}
      </PaginationText>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => handleOnClick("forward")}>
        {">"}
      </PaginationButton>
    </WrapperRow>
  );
};
const PaginationText = styled(PasswordInfo)`
  font-size: 1.2rem;
`;
const PaginationButton = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  margin: 0 0.4rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.4);
  }
`;

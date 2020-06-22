import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { accessGridComments } from "reducers/user";
import { PasswordInfo, WrapperRow } from "lib/stylesheet";

import styled from "styled-components";

export const PaginationComments = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const totalPages = useSelector(
    (store) => store.user.grid.currentCommentPages
  );
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const handleOnClick = (direction) => {
    if (direction === "back") {
      dispatch(accessGridComments(currentGrid.accessToken, currentPage - 1));
      setCurrentPage(currentPage - 1);
    } else {
      dispatch(accessGridComments(currentGrid.accessToken, currentPage + 1));
      setCurrentPage(currentPage + 1);
    }
  };
  console.log("Total pages: ", totalPages);

  if (totalPages > 0) {
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
  } else {
    return <></>;
  }
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

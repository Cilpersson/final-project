import React from "react";
import { PasswordInfo, WrapperRow } from "lib/stylesheet";

import styled from "styled-components";

const PaginationText = styled(PasswordInfo)`
  font-size: 1rem;
  color: black;
  margin: 0 0.4rem;
`;
const PaginationButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  margin: 0 0.4rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Pagination = ({
  currentPage,
  onClickBack,
  onClickForward,
  totalPages,
}) => {
  if (totalPages > 0) {
    return (
      <WrapperRow>
        <PaginationButton disabled={currentPage === 1} onClick={onClickBack}>
          {"<"}
        </PaginationButton>
        <PaginationText>
          {currentPage} / {totalPages}
        </PaginationText>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={onClickForward}>
          {">"}
        </PaginationButton>
      </WrapperRow>
    );
  } else {
    return <></>;
  }
};

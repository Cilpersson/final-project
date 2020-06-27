import React from "react";
import { accessGrid } from "reducers/user";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { Ul, Li, ButtonText, StyledButton } from "lib/stylesheet";

export const AllGridsForUser = ({ gridArr }) => {
  const dispatch = useDispatch();
  const handleOnClick = (gridAccessToken) => {
    dispatch(accessGrid(gridAccessToken));
  };

  return (
    <Ul>
      {gridArr.map((grid) => {
        return (
          <StyledButton
            key={uuid()}
            onClick={() => handleOnClick(grid.accessToken)}>
            <Li key={uuid()}>
              <ButtonText>{grid.name}</ButtonText>
            </Li>
          </StyledButton>
        );
      })}
    </Ul>
  );
};

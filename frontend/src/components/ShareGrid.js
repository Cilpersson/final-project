import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "components/smallerComps/Button";
import { ButtonText, Ul, Greeting, StyledATag } from "lib/stylesheet";

export const ShareGrid = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const textAreaRef = useRef(null);

  const copyOnClick = (event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    event.target.focus();
  };
  return (
    <>
      <Greeting>Share this grid with your friends!</Greeting>
      <Ul>
        <Button
          disabled={false}
          text="Copy accesstoken for grid"
          type="button"
          onClick={copyOnClick}
        />
        <StyledATag
          href={`mailto:?subject=I have a link I want to share with you!&body=Head over to https://www.photogrid.community and sign up to access my grid!%0D%0A%0D%0APaste in this code: ${currentGrid.accessToken}%0D%0A%0D%0AAnd make sure to upload some pictures to it!`}>
          <ButtonText>Share with a friend!</ButtonText>
        </StyledATag>
        <textarea
          // Style properties hides textarea from screen, pretty hacky but it works
          style={{ position: "fixed", top: "-1000px" }}
          ref={textAreaRef}
          defaultValue={currentGrid.accessToken}
        />
      </Ul>
    </>
  );
};

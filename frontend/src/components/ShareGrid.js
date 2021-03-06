import React from "react";
import { useSelector } from "react-redux";
import { Button } from "components/smallerComps/Button";
import {
  ButtonText,
  ShareGridUl,
  Greeting,
  StyledButton,
} from "lib/stylesheet";

export const ShareGrid = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const name = useSelector((store) => store.user.login.name);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      console.log("Could not copy text");
    }
  };

  return (
    <>
      <Greeting>Share this grid with your friends!</Greeting>
      <ShareGridUl>
        <Button
          disabled={false}
          text="Copy grid link"
          type="button"
          onClick={() =>
            copyToClipBoard(
              `https://www.photogrid.community/GridPage/${currentGrid.accessToken}`
            )
          }
        />
        <StyledButton>
          <ButtonText>
            <a
              href={`mailto:?subject=I have a link I want to share with you!&body=Head over to https://www.photogrid.community and sign up to access my grid!%0D%0A%0D%0AWhen you have an account and you're logged in, click this link: https://www.photogrid.community/GridPage/${currentGrid.accessToken}%0D%0A%0D%0AAnd don't forget to upload some images of your own!%0D%0A%0D%0ALot's of love%0D%0A${name}`}>
              <ButtonText>Share with a friend!</ButtonText>
            </a>
          </ButtonText>
        </StyledButton>
      </ShareGridUl>
    </>
  );
};

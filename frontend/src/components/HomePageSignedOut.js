import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Greeting, Paragraph } from "lib/stylesheet";
import { WelcomeGrid } from "./WelcomeGrid";

export const HomePageSignedOut = () => {
  return (
    <>
      <Greeting>
        Welcome to PHOTO GRID <FontAwesomeIcon icon={faCameraRetro} />
      </Greeting>
      <WelcomeGrid />
      <Paragraph>
        PHOTO GRID changes the way we view social media. This is a platform
        where you share memories with friends, family, pets and maybe even
        co-workers. What do we know? You make the rules and we provide the
        platform.
      </Paragraph>
      <Paragraph>
        Start by creating a grid, and share the password to whoever you want.
        Did you and your favourite person just get married? Do you want to see
        images that where taken that day? Then it's time for you to make a
        wedding grid.
      </Paragraph>
      <Paragraph>
        Or perhaps you just had a baby, if that's the case congratulations! Now
        make sure to create a baby grid so everyone you want to share those
        images with can see them!
      </Paragraph>
      <Paragraph>
        Then there are those other moments in life that aren't as happy, when we
        loose someone we love. Maybe you want to keep your favourite pictures of
        that special person in one place. Then you should make a grid, and keep
        that password for yourself.
      </Paragraph>
      <Paragraph>
        And you know what, you don't need life changing events to create a grid,
        make one before you have some friends over for dinner and let them
        upload the images while at your place! There is allways a reason to
        grid!
      </Paragraph>
    </>
  );
};

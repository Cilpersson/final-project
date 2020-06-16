import React from "react";
import { Link } from "react-router-dom";
import { Paragraph, Greeting, SectionWrapper } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";

export const About = () => {
  return (
    <SectionWrapper>
      <Grid />
      <Greeting>What is PHOTO GRID?</Greeting>
      <Paragraph>
        Start by creating a grid, and share the grid link with whomever you
        want. Did you and your favourite person just get married? Do you want to
        see images that where taken on that day? Then it's time for you to make
        a wedding grid and share it with everyone that attended the wedding.
      </Paragraph>
      <br />
      <Paragraph>
        Maybe you just had a baby, if that's the case congratulations! Now make
        sure to create a baby grid so everyone you want to share those images
        with can see them!
      </Paragraph>
      <br />
      <Paragraph>
        Then there are those other moments in life that aren't as happy, when we
        loose someone we love. Maybe you want to keep your favourite pictures of
        that special person in one place. Then you should make a grid, and keep
        that password for yourself.
      </Paragraph>
      <br />
      <Paragraph>
        And you know what, you don't need life changing events to create a grid,
        make one before you have some friends over for dinner and let them
        upload the images while at your place! There is allways a reason to
        grid!
      </Paragraph>
      <br />
      <Paragraph>Enjoy reading?</Paragraph>
      <Link to="/ProjectReflections">
        Head over to Project Reflections to read some more!
      </Link>
    </SectionWrapper>
  );
};

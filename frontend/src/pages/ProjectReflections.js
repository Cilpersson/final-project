import React from "react";
import {
  Greeting,
  Paragraph,
  SectionWrapper,
  PasswordInfo,
} from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import { PDFDisplay } from "../components/PDFDisplay";

export const ProjectReflections = () => {
  return (
    <SectionWrapper>
      <Grid />
      <Greeting>Reflections on this project</Greeting>

      {/* <Paragraph>
        <PasswordInfo>Monday, June 15 - 2020</PasswordInfo>
        With just over a week left of this final project I will write down a few
        thoughts and reflections of the process. This will include what I have
        learned code wise but also other things I have gotten to know about
        myself. I will however start with the more technical part.
      </Paragraph>

      <br />
      <Paragraph>
        Further done on this page I have added my project brief that I handed in
        prior to starting with the project. Pages 2-4 of the brief contain a
        breakdown of different pages and what I thought they should contain. I
        rated the different features from [1 - 3] where features rated [1] where
        the things I should start with. It has been incredibly helpful to have
        during these weeks. Thanks to a well written breif I have always known
        both what I have accomplished so far and what I have had left to do.
      </Paragraph> */}
      <br />
      <Paragraph>
        Curabitur hendrerit, eros nec auctor semper, lectus nunc posuere libero,
        fermentum laoreet neque ipsum ac odio. Morbi consectetur at enim aliquam
        vehicula. Etiam varius metus ut erat scelerisque dictum eget nec nunc.
        Curabitur ut scelerisque sem. In consequat diam erat, vel sagittis dui
        lacinia sit amet. Proin porttitor nulla faucibus enim porttitor, et
        ornare odio dictum. Integer a condimentum lorem. Nullam gravida quam at
        lorem cursus, in rutrum magna vulputate. Quisque nibh mi, blandit quis
        urna et, consectetur tincidunt orci. Integer lobortis gravida mi,
        consequat eleifend nisl tempor sed. In suscipit orci et orci vulputate,
        a auctor neque dictum. Praesent vehicula erat consectetur sem euismod,
        eget accumsan magna euismod. Mauris in lorem quam. Morbi tincidunt
        turpis at nunc pretium, eu vestibulum libero ullamcorper.
      </Paragraph>
      {/* <PDFDisplay /> */}
    </SectionWrapper>
  );
};

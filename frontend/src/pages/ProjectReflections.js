import React from "react";
import { Greeting, Paragraph, SectionWrapper } from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
// import { PDFDisplay } from "../components/PDFDisplay";

export const ProjectReflections = () => {
  return (
    <SectionWrapper>
      <Grid />
      <Greeting>Reflections on this project</Greeting>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non dui
        velit. Morbi vehicula augue eu dolor fermentum, vel faucibus nibh
        feugiat. Nunc posuere vestibulum pharetra. Nulla elit erat, luctus sed
        maximus id, sodales eget felis. Nulla sem metus, aliquam in orci sit
        amet, eleifend iaculis urna. Praesent quis felis sed purus ultricies
        volutpat. Mauris congue, dolor nec fermentum feugiat, felis sem aliquam
        diam, vitae sollicitudin massa ligula sed odio.
      </Paragraph>
      <Paragraph></Paragraph>
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
    </SectionWrapper>
  );
};

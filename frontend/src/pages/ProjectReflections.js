import React from "react";
import {
  Greeting,
  Paragraph,
  SectionWrapper,
  PasswordInfo,
} from "lib/stylesheet";
import { Grid } from "../components/logo/Grid";
import { PDFDisplay } from "../components/PDFDisplay";
import styled from "styled-components/macro";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = styled.ul``;

const ListItem = styled.li`
  text-align: left;
  width: 55%;
  margin: auto;
  list-style-type: square;

  @media (max-width: 668px) {
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 65%;
  }
`;

const StyledLinks = styled.a`
  color: #84eccf;

  font-size: 2.5rem;
  border-radius: 0.2rem;
  margin: 0 0.4rem;

  transition: 0.4s;

  &:hover {
    color: #148867;
    transform: scale(1.2);
  }
`;

const Bold = styled.span`
  font-weight: bolder;
`;

export const ProjectReflections = () => {
  return (
    <SectionWrapper>
      <Grid />
      <Greeting>Reflections on this project</Greeting>
      <PasswordInfo>Tuesday, June 16 - 2020</PasswordInfo>
      <Paragraph>
        With just over a week left of this final project I will write down a few
        thoughts and reflections of the process. This will include what I have
        learned code wise but also other things I have gotten to know about
        myself.
      </Paragraph>
      <br />
      <h4>TECH</h4>
      <Paragraph>
        Further down on this page I have added my project brief that I handed in
        prior to starting with the project. Pages 2 - 4 of the brief contains a
        breakdown of the website. I tried to visualise the larger components and
        pages, and wrote down most things I could think of that they should
        contain. I rated the different features from [1 - 3] where features
        rated [ 1 ] where the absolut minimum for the finished product and
        therefore the things I should start with. It has been incredibly helpful
        to look at the brief during these weeks. Thanks to a well structured
        brief I have always known both what I have accomplished so far and
        what's been left to do. This is something I will take with me for future
        projects, I can proudly say that I work incredibly well when I have
        structure around me.
      </Paragraph>
      <br />
      <Paragraph>
        There where a few decisions I needed to make right away. The first one
        was one or two repositories? I choose one, I will explain the two main
        reasons for that. Neither the back- or frontend would be very
        spectacular without the other, they need each other to make this project
        become as I visualised. Since everything is written in Javascript, the
        entire backend with the help of node.js and the frontend as well, where
        the styling is CSS-in-JS, going for one repo felt even more right.
        Besides that reasoning this was one of those times where I could decide
        to do everything exactly as I wanted since I have done this project by
        myself, and I took that chance. I have loved having my front- and
        backend in one big repo. It has been easy to go back and forth between
        files and folders. It also pushed me to make sure that every file and
        folder followed the same naming convention which has been a nice bonus.
        When doing side projects in the future I think it's most likely that I
        will make those with one repo as well. I should also mention that I
        watched a talk about Googles mono repo, and that might have affected my
        decision a bit.
      </Paragraph>
      <br />
      <StyledLinks
        href="https://github.com/Cilpersson/final-project"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubAlt} />
        <PasswordInfo>Click for repository</PasswordInfo>
      </StyledLinks>
      <br />
      <Paragraph>
        When I had created my repo I started setting up my backend endpoints and
        creating my mongoose models. I did as many of the [ 1 ] graded endpoints
        as possible. I used postman to continuously test them. A couple of the
        endpoints changed during the project, the post image endpoint for
        example could only handle one image at a time at first, but now several
        images can be posted at once.
      </Paragraph>
      <br />
      <List>
        <h4>Endpoints</h4>
        <ListItem>Sign up - with password encryption</ListItem>
        <ListItem>Login - with password encryption</ListItem>
        <ListItem>Create new grid</ListItem>
        <ListItem>Connect to grid</ListItem>
        <ListItem>
          Endpoint returning one user with information about it's created and
          connected grids
        </ListItem>
        <ListItem>
          Endpoint returning one grid with information about it's images, name
          and more
        </ListItem>
        <ListItem>Post images to grid</ListItem>
        <ListItem>Post comments to grid</ListItem>
        <ListItem>Leave a grid the user is connected to</ListItem>
        <ListItem>
          Delete grid - This endpoint works, however it does not currently
          delete the images from cloudinary
        </ListItem>
        <ListItem>
          Paginated and populated endpoint for images using aggregate
        </ListItem>
        <ListItem>
          Paginated and populated endpoint for comments using aggregate
        </ListItem>
        <ListItem>User authentication for most endpoints</ListItem>
        <br />
        <h4>Models</h4>
        <ListItem>User, Grid, Image & Comment</ListItem>
      </List>
      <br />
      <Paragraph>
        At first I thought that I was going to use grid to display the images on
        each Grid page, I created a layout and thought it was okay but no more
        than so. Therefore I decided to use Flexbox and flex wrap instead. The
        look is much cleaner and I'm glad I tried something else. I was looking
        for a light-box package so that each image could be viewed in a full
        screen mode. I didn't find one that looked as I wanted it to, so I made
        my own. I'm very happy with the end result, the only thing it's missing
        at this point is key press connected to the buttons. So the user could
        press esc to exit the fullscreen image mode and arrow functionality to
        keypress between images. Another feature related to displaying the
        images is the slider that adjusts the image size in the grid. I had my
        sister in mind when adding that feature. She has really bad eyesight,
        and I knew from the start that it was a feature that would be useful for
        her.
      </Paragraph>
      <br />
      <Paragraph>
        Another thing I'm very proud of is the possibility to share a link to a
        grid with another user. The user clicks a a button, the URL link gets
        copied and any another user, that is signed in, can paste that link and
        the grid gets added to that users connected grids list. I didn't find
        any helpful solutions when I googled, but after some thinking I came up
        with an idea on how to solve it and I screamed of joy when it worked.
        useEffect, window.location.pathname and regEx I owe you big time!
      </Paragraph>
      <br />
      <Paragraph>
        I tweaked the comment idea a bit. Instead of having comments for each
        image, which felt as if it would get cluttered fast I went with a
        guestbook comment section instead. I'm glad I did and I think it works
        better with the feeling of the site as a whole. I've spent a lot of time
        on details, I display the name of the user not only in the placeholder
        in the textarea in the comment section, but also on the 404 page. At
        signup the user gets one welcome message and another at login. I use
        moment.js to display when a comment was posted and the users name is
        displayed without the user having to type it.
      </Paragraph>
      <br />
      <Paragraph>
        There are however a few things in my brief I have not yet implemented.
        The delete grid feature for example, at the time of writing this the
        images does not get deleted from cloudinary. I would like to have some
        sort of user moderating. If two or three users have reported an image it
        should not be displayed. Another thing I would like would be to see who
        has uploaded an images when hovering the image. I will not have time to
        finish those things before the final presentation. But I will continue
        to work on this project in the future. I have accomplished almost
        everything in my brief over twenty-one days. That's something I should
        be proud of. When I applied to the Technigo course I spent four days
        making a one page website with HTML and CSS, after four days during this
        project I had, among other things, created an endpoint that could post
        images to cloudinary. I have worked hard, and I'm very proud of what I
        have done.
      </Paragraph>
      <br />
      <PDFDisplay />
      <br />
      <h4>PERSONAL</h4>
      <Paragraph>
        There are a few things that I did't take in account when I was writing
        my brief. In the thoughts and concerns section I did mention that the
        project concept was getting quite large. What I didn't think of was how
        it would affect me being alone with a project of this size. When
        something didn't work, I didn't have a direct team that I could share
        that frustration with. We did have stand-ups in the Hippo team every
        Monday and Wednesday, but when something didn't work with my code that
        was on me, myself and I. I never considered that before hand, but from
        now on I will. When you have complete responsibility for something, then
        the frustration regarding that something will be hard to share with
        others. As proud as I am of what I have done, I must be honest and say
        that it has been a real challenge doing it by myself. But doing it by
        myself also means that the final product is me. The decision to use
        double quotes and semi colons are both mine. The endpoints are mine, the
        design is mine, all feature on this website is thought out by me. Every
        line of code is written by me.
      </Paragraph>
      <br />
      <Paragraph>
        I made this, <Bold>by myself</Bold>, and I'm very proud of the end
        result.
      </Paragraph>
      <br />
    </SectionWrapper>
  );
};

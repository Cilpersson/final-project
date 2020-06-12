import React, { useState } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  Legend,
  Fieldset,
  Paragraph,
  SectionWrapper,
} from "lib/stylesheet";
import { Grid } from "components/logo/Grid";
import { postCommentToGrid } from "reducers/user";

const Textarea = styled.textarea`
  text-align: left;
  height: 5rem;
  width: 100%;
`;

const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Label = styled.label`
  margin-bottom: 0.6rem;
`;

const Comments = styled.button`
  margin: auto;
  background-color: #84eccf;

  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const GridFormP = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  text-shadow: 0.1rem 0.1rem #074835;
  color: #ffffff;
  font-size: 1.1rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`;

export const GridComments = () => {
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const currentComments = useSelector(
    (store) => store.user.grid.currentGridComments
  );
  const dispatch = useDispatch();
  const name = useSelector((store) => store.user.login.name);
  const [comment, setComment] = useState("");

  const [showComments, setShowComments] = useState(false);

  const handleOnSubmit = (event, message) => {
    event.preventDefault();
    dispatch(postCommentToGrid(message));
    setComment("");
  };
  return (
    <>
      <Comments onClick={() => setShowComments(!showComments)}>
        <GridFormP>{showComments ? "Grid" : "Comments"}</GridFormP>{" "}
      </Comments>

      {showComments && (
        <SectionWrapper>
          <form onSubmit={(event) => handleOnSubmit(event, comment)}>
            <Fieldset>
              <Legend>WRITE A COMMENT</Legend>
              <Grid />
              <br />

              <Label>
                <Textarea
                  required
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                />
              </Label>

              <button type="submit">submit</button>
            </Fieldset>
          </form>
          {currentComments.map((comment) => {
            return (
              <p>
                {comment.message} by {comment.name}
              </p>
            );
          })}
        </SectionWrapper>
      )}
    </>
  );
};

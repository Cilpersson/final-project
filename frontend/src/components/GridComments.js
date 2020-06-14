import React, { useState } from "react";
import styled from "styled-components/macro";
import moment from "moment";
import { uuid } from "uuidv4";
import { useSelector, useDispatch } from "react-redux";
import { WrapperCol } from "lib/stylesheet";
import { PixelHeart } from "components/PixelHeart";
import { postCommentToGrid } from "reducers/user";

const Comment = styled.div`
  background: #84eccf;
  color: #084030;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 4rem;
  max-width: 30rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const CommentForm = styled.form`
  width: 100%;
`;

const CommentText = styled.p`
  text-align: justify;
`;
const WrittenBy = styled.p`
  text-align: right;
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.5;
`;

const GuestBook = styled.section`
  background: #fff;

  border-radius: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1.5rem;
  width: 100%;

  @media (min-width: 668px) {
    width: 70%;
    margin: 1.5rem auto;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 1.5rem auto;
  }
`;

const Textarea = styled.textarea`
  text-align: left;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  border: 0.2rem solid #1dd19e;
  width: 70%;
  height: 6rem;

  &::-webkit-input-placeholder {
    text-align: center;
  }
`;

const Label = styled.label`
  width: 100%;
`;

export const GridComments = () => {
  const currentComments = useSelector(
    (store) => store.user.grid.currentGridComments
  );
  const dispatch = useDispatch();
  const name = useSelector((store) => store.user.login.name);
  const [comment, setComment] = useState("");

  const handleOnSubmit = (event, message) => {
    event.preventDefault();
    dispatch(postCommentToGrid(message));
    setComment("");
  };
  return (
    <>
      <GuestBook>
        <CommentForm onSubmit={(event) => handleOnSubmit(event, comment)}>
          GUEST BOOK
          <br />
          <WrapperCol>
            <Label>
              <Textarea
                placeholder={`${name}, you should leave a message!`}
                required
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </Label>
            <Button type="submit">
              <PixelHeart />
              SUBMIT
            </Button>
          </WrapperCol>
        </CommentForm>
        {currentComments.map((comment) => {
          return (
            <Comment key={uuid()}>
              <CommentText>{comment.message}</CommentText>
              <WrittenBy>
                {" "}
                by {comment.name} - {moment(comment.createdAt).fromNow()}
              </WrittenBy>
            </Comment>
          );
        })}
      </GuestBook>
    </>
  );
};

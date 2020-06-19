import React, { useState } from "react";
import styled from "styled-components/macro";
import { PasswordInfo, ErrorInfo } from "lib/stylesheet";
import moment from "moment";
import { uuid } from "uuidv4";
import { useSelector, useDispatch } from "react-redux";
import { WrapperCol } from "lib/stylesheet";
import { PixelHeart } from "components/PixelHeart";
import { postCommentToGrid } from "reducers/user";
import { CommentCount } from "components/smallerComps/CommentCount";

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

  @media (max-width: 668px) {
    width: 100%;
  }
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
  text-align: left;
  word-break: break-all;
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
  margin: 1.5rem 1.5rem 0;
  width: 100%;

  @media (min-width: 668px) {
    width: 70%;
    margin: 1.5rem auto 0;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 1.5rem auto 0;
  }
`;

const Label = styled.label`
  width: 70%;
  min-height: 6rem;
  max-width: 30rem;

  margin: 0.4rem auto;
  border-radius: 0.4rem;
  border: 0.2rem solid #84eccf;

  background: #ffffff;
  display: flex;
  flex-direction: column;

  &:focus-within {
    border: 0.2rem solid #1dd19e;
  }
  @media (max-width: 668px) {
    width: 100%;
  }
`;
const Textarea = styled.textarea`
  padding: 0.4rem;
  border: none;
  min-height: 6rem;
  width: 100%;
  background: #ffffff;
  resize: none;

  &::-webkit-input-placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;

export const GridComments = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const error = useSelector((store) => store.user.login.errorMessage);
  const name = useSelector((store) => store.user.login.name);
  const currentComments = useSelector(
    (store) => store.user.grid.currentGridComments
  );

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
                minLength="2"
                maxLength="140"
                placeholder={`${name}, you should leave a message!`}
                required
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <CommentCount charCount={comment.length} />
            </Label>
            <PasswordInfo>
              Write a message between 2 & 140 characters.
            </PasswordInfo>
            <Button
              type="submit"
              disabled={comment.length < 2 || comment.length > 140}>
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

import React, { useState } from "react";
import {
  PasswordInfo,
  CommentLabel,
  Greeting,
  Textarea,
  GuestBook,
  WrittenBy,
  CommentText,
  CommentForm,
  Button,
  Comment,
} from "lib/stylesheet";
import moment from "moment";
import { uuid } from "uuidv4";
import { useSelector, useDispatch } from "react-redux";
import { WrapperCol } from "lib/stylesheet";
import { PixelHeart } from "components/PixelHeart";
import { postCommentToGrid } from "reducers/user";
import { CommentCount } from "components/smallerComps/CommentCount";
import { accessGridComments } from "reducers/user";
import { Pagination } from "./smallerComps/Pagination";

export const GridComments = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const name = useSelector((store) => store.user.login.name);
  const currentComments = useSelector(
    (store) => store.user.grid.currentGridComments
  );
  const totalPagesComments = useSelector(
    (store) => store.user.grid.currentCommentPages
  );
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);

  const handleOnSubmit = (event, message) => {
    event.preventDefault();
    dispatch(postCommentToGrid(message));
    setComment("");
    setCurrentPage(1);
  };

  return (
    <>
      <GuestBook>
        <CommentForm onSubmit={(event) => handleOnSubmit(event, comment)}>
          <Greeting>GUEST BOOK</Greeting>
          <WrapperCol>
            <CommentLabel>
              <Textarea
                minLength="2"
                maxLength="140"
                placeholder={`${name}, you should leave a message!`}
                required
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <CommentCount charCount={comment.length} />
            </CommentLabel>
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
        <Pagination
          onClickFirst={() => {
            dispatch(accessGridComments(currentGrid.accessToken, 1));
            setCurrentPage(1);
          }}
          totalPages={totalPagesComments}
          currentPage={currentPage}
          onClickBack={() => {
            dispatch(
              accessGridComments(currentGrid.accessToken, currentPage - 1)
            );
            setCurrentPage(currentPage - 1);
          }}
          onClickForward={() => {
            dispatch(
              accessGridComments(currentGrid.accessToken, currentPage + 1)
            );
            setCurrentPage(currentPage + 1);
          }}
          onClickLast={() => {
            dispatch(
              accessGridComments(currentGrid.accessToken, totalPagesComments)
            );
            setCurrentPage(totalPagesComments);
          }}
        />
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

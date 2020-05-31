import React from "react";

export const Button = ({ disabled, text, onClick, type }) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

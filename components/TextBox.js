import React from "react";

const TextBox = ({ title, content }) => {
  return (
    <div className="textbox">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default TextBox;

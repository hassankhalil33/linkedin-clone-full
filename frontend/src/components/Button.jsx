import React from "react";

function Button(props) {
  const { content, className } = props;

  return (
    <button className={className}>{content}</button>
  )
}

export default Button;

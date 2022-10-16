import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const { content, className, url } = props;
  const navigate = useNavigate();

  return (
    <button className={className} onClick={(e) => {
      e.preventDefault();
      navigate(url);
    }}>{content}</button>
  )
}

export default Button;

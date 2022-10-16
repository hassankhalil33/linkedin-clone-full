import React, { useState } from "react";

function Input(props) {
  const { type, placeholder, name } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <input
      onChange={handleChange}
      value={input}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input;

import React from "react";

function Select(props) {
  return (
    <select name="usertype" placeholder="Type">
      <option value="user">User</option>
      <option value="company">Company</option>
    </select>
  )
}

export default Select;

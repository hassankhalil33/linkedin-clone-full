import React from "react";

function Select() {
  return (
    <select required name="usertype" className="select-form">
      <option value="" disabled selected>Type</option>
      <option value="user">User</option>
      <option value="company">Company</option>
    </select>
  )
}

export default Select;

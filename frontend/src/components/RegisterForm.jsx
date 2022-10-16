import React from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

function RegisterForm() {
  return (
    <form className="login-form">
      <h3>LinkedOut</h3>
      <div>
        <Input
          type={"text"}
          name={"email"}
          placeholder={"Email"}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Password"}
        />
        <Select />
        <Input
          type={"text"}
          name={"location"}
          placeholder={"Location"}
        />
      </div>
      <Button content={"Register"} />
      <p>existing user? <Button
        className={"navigate-button"}
        content={"login"}
        url={"/"}
      />
      </p>
    </form>
  )
}

export default RegisterForm;

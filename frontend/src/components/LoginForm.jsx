import React from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

function LoginForm() {
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
      </div>
      <Button content={"Sign In"} />
      <p>new user? <Button
        className={"navigate-button"}
        content={"register"}
        url={"/register"}
      />
      </p>
    </form>
  )
}

export default LoginForm;

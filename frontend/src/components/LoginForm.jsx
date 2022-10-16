import React from "react";
import Input from "./Input";
import Button from "./Button";

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
        <Input
          type={"password"}
          name={"password-confirm"}
          placeholder={"Confirm Password"}
        />
      </div>
      <Button
        content={"Sign In"}
      />
    </form>
  )
}

export default LoginForm;

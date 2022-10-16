import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

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
      <Button content={"Sign In"} />
      <p>New User? <Button
        content={"register"}
        onClick={() => navigate("/register")}
      />
      </p>
    </form>
  )
}

export default LoginForm;

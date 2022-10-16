import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
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
          type={"text"}
          name={"usertype"}
          placeholder={"User Type"}
        />
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
        onClick={() => navigate("/")}
      />
      </p>
    </form>
  )
}

export default RegisterForm;

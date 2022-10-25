import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  const register = () => {
    console.log("registered");
  }

  return (
    <section className="login-section register-section">
      <RegisterForm clicked={register} />
    </section>
  )
}

export default Register;

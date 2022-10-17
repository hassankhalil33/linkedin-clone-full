import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  const login = () => {
    console.log("logged in");
  }

  return (
    <section className="login-section">
      <LoginForm clicked={login} />
    </section>
  )
}

export default Login;

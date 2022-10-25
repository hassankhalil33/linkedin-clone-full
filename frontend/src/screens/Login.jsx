import React from "react";
import LoginForm from "../components/LoginForm";
import axios from "../api/axios";

function Login() {
  const batata = {
    email: "asdas@gmail.com",
    password: "Codi33",
    type: "company"
  }

  const login = async () => {
    try {
      const response = await axios.post("/login", batata);
      console.log(response.data);

      console.log("logged in");
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <section className="login-section">
      <LoginForm clicked={login} />
    </section>
  )
}

export default Login;

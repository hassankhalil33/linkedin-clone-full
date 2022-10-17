import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import FetchData from "./hooks/FetchData";

function App() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGFzZGFzQGdtYWlsLmNvbSIsImlhdCI6MTY2NTk5MDA1MSwiZXhwIjoxNjY2MDExNjUxfQ.8msz4i_KjtLDd2PpA2KxL3AlIL8iChWuATqOArBorj8";
  const { data } = FetchData("company/", token);
  console.log(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;

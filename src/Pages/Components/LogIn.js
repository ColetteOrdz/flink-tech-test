import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegModal from "../RegModal";

import "./Styles/Forms.css";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const API_URL = "https://flink-web-test.herokuapp.com";

  const logIn = async () => {
    return await axios({
      method: "post",
      url: `${API_URL}/api/v1/login`,
      data: {
        email: email,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    logIn()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        if (response.data.isLoggedIn === true) {
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/main");
        }
      })
      .catch((error) => {
        document.querySelector(".error").innerHTML = `${error.message}`;
      });
  };

  return (
    <>
      <form onSubmit={(e) => login(e)} className="log-form">
        <label className="data-label">Email*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          required
          autoFocus
        />
        <label className="data-label">Password*</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <p className="error"></p>
        <div className="btn-container">
          <button className="form-btn" type="submit">
            Log in
          </button>
          <RegModal />
        </div>
      </form>
    </>
  );
};

export default LogIn;

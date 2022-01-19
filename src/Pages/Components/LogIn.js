import React, {useState} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import RegModal from "../RegModal";

import "./Styles/Forms.css";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const API_URL = "https://flink-web-test.herokuapp.com";

  const logIn = async () => {
        return await axios({
          method: "post",
          url: `${API_URL}/api/v1/login`,
          data: {
            email: email,
            password: password,
          }
        });
      };

  const login = (e) => {
    e.preventDefault();
    logIn()
      .then((response) => {
        if(response.data.isLoggedIn === true){
          localStorage.setItem("user", response.data.isLoggedIn);
          <Navigate to="/main" />
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <form onSubmit={(e) => login(e)} className="log-form">
        <label className="data-label">Email*</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@mail.com" required />
        <label className="data-label">Password*</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />

        <div className="btn-container">
          <button className="form-btn" type="submit">
            Log in
          </button>
          {/* <Link to="/register">
            <button>Don't have an accout? Sign In</button>
          </Link> */}
          <RegModal />
        </div>
      </form>
    </>
  );
};

export default LogIn;
